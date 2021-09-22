coverage-badges-cli
---

[![Coverage Status](https://jaywcjlove.github.io/coverage-badges-cli/badges.svg)](https://jaywcjlove.github.io/coverage-badges-cli/lcov-report/)

Create coverage badges from coverage reports.

Don't worry about the [coverage.io](https://coveralls.io/) service is down. 

## Install

```shell
$ npm i coverage-badges-cli
```

## Example

```js
{
  "scripts": {
    "coverage": "jest --coverage"
    "make-badges": "coverage-badges",
  },
  "jest": {
    "coverageReporters": [
      "lcov",
      "json-summary"
    ],
  }
}
```

This config creates a coverage badge in a default directory ./badges.

You can add `![Coverage](./coverage/badges.svg)` to your README.md after the badge creation.

## Github Actions

```yml
name: Build & Deploy
on:
  push:
    branches:
      - master

jobs:
  build-deploy:
    runs-on: ubuntu-18.04
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: 14

    - run: npm install
    - run: npm run build
    - run: npm run coverage
    - run: npm i coverage-badges-cli -g
    - run: coverage-badges --output coverage/badges.svg

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/master'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./coverage
```

## Command Help

```bash
Usage: coverage-badges [options] [--help|h]

Options:

  --version, -v  Show version number
  --help, -h     Displays help information.
  --output, -o   Output directory.
  --source, -s   The path of the target file "coverage-summary.json".
  --style        Badges style: flat, flat-square.

Example:

  npm coverage-badges-cli --output coverage/badges.svg
  npm coverage-badges-cli --style plastic
  npm coverage-badges-cli --source coverage/coverage-summary.json
```

## Development

```bash
$ npm i
$ npm run build
$ npm run watch
```

## License

MIT © [Kenny Wong](https://wangchujiang.com/)

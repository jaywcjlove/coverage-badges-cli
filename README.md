coverage-badges-cli
===
<!--rehype:style=display: flex; height: 230px; align-items: center; justify-content: center; font-size: 38px;-->

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Build & Deploy](https://github.com/jaywcjlove/coverage-badges-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/coverage-badges-cli/actions/workflows/ci.yml)
[![Coverage Status](https://jaywcjlove.github.io/coverage-badges-cli/badges.svg)](https://jaywcjlove.github.io/coverage-badges-cli/lcov-report/)
[![npm version](https://img.shields.io/npm/v/coverage-badges-cli.svg)](https://www.npmjs.com/package/coverage-badges-cli)
[![Download NPM](https://img.shields.io/npm/dm/coverage-badges-cli.svg?style=flat)](https://www.npmjs.com/package/coverage-badges-cli/)

Create coverage badges from coverage reports. Using GitHub Actions and GitHub Workflow CPU time (no 3rd parties servers).

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
    "collectCoverageFrom": [
      "<rootDir>/packages/**/*.{tsx,ts}",
      "!**/*.{js,d.ts}"
    ],
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

### Input Parameters

![](https://jaywcjlove.github.io/coverage-badges-cli/badges-classic.svg)
![](https://jaywcjlove.github.io/coverage-badges-cli/badges-flat.svg)

- `source` - The path of the target file "coverage-summary.json".
- `output` - Output image path.
- `label` - The left label of the badge, usually static (default `coverage`).
- `style` - Badges style: `flat`, `classic` (default `classic`).
- ~~`type`~~ - (No longer supported after v1.2.0) Coverage report type: `lines`, `statements`, `functions`, `branches` (default `statements`)
- `jsonPath` - Path to the coverage percentage number to be used in the badge (default `total.statements.pct`)
- `icon` - Path to icon file

```yml
- name: Create Coverage Badges
  uses: jaywcjlove/coverage-badges-cli@main
  with:
    style: flat
    source: coverage/coverage-summary.json
    output: coverage/badges.svg
    jsonPath: totals.percent_covered

- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```

### Output Parameters

svg svg image string: `<svg xmlns....`.

### Using the command line

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
  --type         Coverage type: lines, statements, functions, branches.
  --icon         Path to icon file
  --label        The left label of the badge, usually static (default `coverage`).

Example:

  npm coverage-badges-cli --output coverage/badges.svg
  npm coverage-badges-cli --style plastic
  npm coverage-badges-cli --source coverage/coverage-summary.json
  npm coverage-badges-cli --type lines
  npm coverage-badges-cli --icon my-icon.svg
```

## Development

```bash
$ npm i
$ npm run build
$ npm run watch
```

## See also

- [Github Release Changelog](https://github.com/jaywcjlove/changelog-generator) Generator A GitHub Action that compares the commit differences between two branches
- [Create Tags From](https://github.com/jaywcjlove/create-tag-action) Auto create tags from commit or package.json.
- [Github Action Contributors](https://github.com/jaywcjlove/github-action-contributors) Github action generates dynamic image URL for contributor list to display it!
- [Create Coverage Badges](https://github.com/jaywcjlove/coverage-badges-cli) Create coverage badges from coverage reports. (no 3rd parties servers)
- [Generated Badges](https://github.com/jaywcjlove/generated-badges) Create a badge using GitHub Actions and GitHub Workflow CPU time (no 3rd parties servers)

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/jaywcjlove/coverage-badges-cli/graphs/contributors">
  <img src="https://jaywcjlove.github.io/coverage-badges-cli/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

MIT © [Kenny Wong](https://wangchujiang.com/)

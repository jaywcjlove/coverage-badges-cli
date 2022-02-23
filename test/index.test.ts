import FS from 'fs-extra';
import path from 'path';
import run from '../src';
import { badge } from '../src/badges';
import { create } from '../src/create';
import { cliHelp, exampleHelp } from '../src';


it('test run case', async () => {
  const summary = path.resolve(process.cwd(), 'coverage/coverage-summary.json');
  FS.ensureDirSync(path.dirname(summary));
  FS.writeJsonSync(summary, {
    "total": {
      "statements": {
        "total": 45,
        "covered": 25,
        "skipped": 0,
        "pct": 55.56
      },
    },
  })
  expect(run()).toBeUndefined();
  const output = path.resolve(process.cwd(), 'coverage/badges.svg');
  const exists = FS.existsSync(output);
  expect(exists).toBeTruthy();
  const dirs = await FS.readdir(path.join(process.cwd(), 'coverage'));
  // expect(dirs).toEqual(['badges.svg', 'coverage-summary.json', 'lcov-report', 'lcov.info']);
  expect(dirs).toEqual(expect.arrayContaining(['badges.svg', 'coverage-summary.json']));
});

it('test badge case', async () => {
  const str = badge({ style: 'flat' }, {
    "total": {
      "statements": {
        "total": 45,
        "covered": 25,
        "skipped": 0,
        "pct": 100
      },
    },
  } as any);
  expect(str.indexOf(`<text x="648" y="138" textLength="330">100%</text`) > 0).toBeTruthy();
  expect(str.indexOf(`<text x="60" y="148" textLength="503" fill="#000" opacity="0.1">coverage</text>`) > 0).toBeTruthy();
});

console.log = jest.fn();
it('test create case', async () => {
  const str = create({ style: 'flat', _: [], source: 'coverage2/coverage-summary.json', output: 'coverage2/svg.svg' });

  // @ts-ignore
  expect(console.log.mock.calls[0][0]).toBe('\x1b[31mErr Source Path:\x1b[0m coverage2/coverage-summary.json\n');
  // @ts-ignore
  expect(console.log.mock.calls[0][1]).toBe('> please specify the file directory\n');
  expect(str).toBeUndefined();
});

it('test cliHelp/exampleHelp case', async () => {
  expect(cliHelp()).toBeUndefined();
  expect(exampleHelp()).toBeUndefined();
});

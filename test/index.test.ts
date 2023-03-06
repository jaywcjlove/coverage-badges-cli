import FS from 'fs-extra';
import path from 'path';
import run from '../src';
import { badge } from '../src/badges';
import { create, Summary } from '../src/create';
import { cliHelp, exampleHelp } from '../src';

const mockSummary: Summary = {
  total: {
    lines: {
      total: 60,
      covered: 30,
      skipped: 2,
      pct: 100,
    },
    statements: {
      total: 45,
      covered: 25,
      skipped: 0,
      pct: 85,
    },
    functions: {
      total: 50,
      covered: 35,
      skipped: 4,
      pct: 90,
    },
    branches:  {
      total: 50,
      covered: 35,
      skipped: 4,
      pct: 95,
    },
  },
};

it('test run case', async () => {
  const summary = path.resolve(process.cwd(), 'coverage/coverage-summary.json');
  FS.ensureDirSync(path.dirname(summary));
  FS.writeJsonSync(summary, mockSummary)
  expect(run()).toBeUndefined();
  const output = path.resolve(process.cwd(), 'coverage/badges.svg');
  const exists = FS.existsSync(output);
  expect(exists).toBeTruthy();
  const dirs = await FS.readdir(path.join(process.cwd(), 'coverage'));
  // expect(dirs).toEqual(['badges.svg', 'coverage-summary.json', 'lcov-report', 'lcov.info']);
  expect(dirs).toEqual(expect.arrayContaining(['badges.svg', 'coverage-summary.json']));
});

it('test badge case - default', async () => {
  const str = badge({ style: 'flat', status: '85%' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">85%</text>`) > 0).toBeTruthy();
  expect(str.indexOf(`<text x="50" y="138" textLength="503">coverage</text>`) > 0).toBeTruthy();
});

it('test badge case - statements', async () => {
  const str = badge({ style: 'flat', status: '85%', type: 'statements' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">85%</text>`) > 0).toBeTruthy();
});

it('test badge case - lines', async () => {
  const str = badge({ style: 'flat', status: '100%', type: 'lines' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="330">100%</text>`) > 0).toBeTruthy();
});

it('test badge case - functions', async () => {
  const str = badge({ style: 'flat', status: '90%', type: 'functions' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">90%</text>`) > 0).toBeTruthy();
});

it('test badge case - branches', async () => {
  const str = badge({ style: 'flat', status: '95%', type: 'branches' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">95%</text>`) > 0).toBeTruthy();
});

it('test badge case - custom label', async () => {
  const customLabel = "Custon Label";
  const str = badge({ style: 'flat', status: '85%', label: customLabel }, mockSummary as any);

  expect(str.indexOf(`<text x="50" y="138" textLength="715">${customLabel}</text>`) > 0).toBeTruthy();
});

console.log = jest.fn();
it('test create case', async () => {
  const str = create({ style: 'flat', status: '85%', _: [], source: 'coverage2/coverage-summary.json', output: 'coverage2/svg.svg' });

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

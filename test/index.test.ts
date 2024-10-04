import FS from 'fs-extra';
import path from 'path';
import run from '../src';
import { badge } from '../src/badges';
import { create } from '../src/create';
import { cliHelp, exampleHelp } from '../src';

const mockSummary = {
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
  const str = badge({ style: 'flat', status: '85%', jsonPath: 'total.statements.pct' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">85%</text>`) > 0).toBeTruthy();
});

it('test badge case - lines', async () => {
  const str = badge({ style: 'flat', status: '100%', jsonPath: 'total.lines.pct' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="330">100%</text>`) > 0).toBeTruthy();
});

it('test badge case - functions', async () => {
  const str = badge({ style: 'flat', status: '90%', jsonPath: 'total.functions.pct' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">90%</text>`) > 0).toBeTruthy();
});

it('test badge case - branches', async () => {
  const str = badge({ style: 'flat', status: '95%', jsonPath: 'total.branches.pct' }, mockSummary as any);

  expect(str.indexOf(`<text x="648" y="138" textLength="260">95%</text>`) > 0).toBeTruthy();
});

it('test badge case - custom label', async () => {
  const customLabel = "Custon Label";
  const str = badge({ style: 'flat', status: '85%', label: customLabel }, mockSummary as any);

  expect(str.indexOf(`<text x="50" y="138" textLength="715">${customLabel}</text>`) > 0).toBeTruthy();
});

it('test badge case - label color', async () => {
  const customLabel = "Custon Label";
  const str = badge({ style: 'flat', status: '85%', labelColor: "ADF", label: customLabel }, mockSummary as any);
  expect(str.indexOf(`<text x="50" y="138" textLength="715">${customLabel}</text>`) > 0).toBeTruthy();
  expect(str.indexOf(`<rect fill="#ADF" width="815" height="200"/>`) > 0).toBeTruthy();
});

it('test badge case - color', async () => {
  const customLabel = "Custon Label";
  const str = badge({ style: 'flat', status: '85%', color: "ADF", label: customLabel }, mockSummary as any);
  expect(str.indexOf(`<text x="50" y="138" textLength="715">${customLabel}</text>`) > 0).toBeTruthy();
  expect(str.indexOf(`<rect fill="#ADF" x="815" width="360" height="200"/>`) > 0).toBeTruthy();
});

it('test badge case - custom icon', async () => {
  const customIcon = "./test/sample-logo.svg";
  const processedIconString = `<image x="40" y="35" width="130" height="132" xlink:href="data:image/svg+xml,%3csvg xmlns=&apos;http://www.w3.org/2000/svg&apos; xml:space=&apos;preserve&apos; baseProfile=&apos;tiny&apos; overflow=&apos;visible&apos; version=&apos;1.2&apos; viewBox=&apos;0 0 256 257.5&apos;%3e%3ccircle cx=&apos;128&apos; cy=&apos;128.8&apos; r=&apos;120&apos; fill=&apos;none&apos; stroke=&apos;black&apos; stroke-miterlimit=&apos;10&apos; stroke-width=&apos;14&apos;/%3e%3c/svg%3e"/>`;
  // const processedIconString = `<image x="40" y="35" width="130" height="132" xlink:href="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' baseProfile='tiny' overflow='visible' version='1.2' viewBox='0 0 256 257.5'%3e%3ccircle cx='128' cy='128.8' r='120' fill='none' stroke='black' stroke-miterlimit='10' stroke-width='14'/%3e%3c/svg%3e"/>`;
  const str = badge({ style: 'flat', status: '85%', icon: customIcon }, mockSummary as any);
  expect(str.indexOf(processedIconString) > 0).toBeTruthy();
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

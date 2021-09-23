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
  const svgStr = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104" height="20" role="img" aria-label="coverage: 100%">
  <title>coverage: 100%</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
    <stop offset="1" stop-opacity=".1" />
  </linearGradient>
  <clipPath id="r">
    <rect width="104" height="20" rx="3" fill="#fff" />
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="61" height="20" fill="#555"/>
    <rect x="61" width="143" height="20" fill="#49c31a"/>
    <rect width="104" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <text aria-hidden="true" x="315" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="510">coverage</text>
    <text x="315" y="140" transform="scale(.1)" fill="#fff" textLength="510">coverage</text>
    <text aria-hidden="true" x="815" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" >100%</text>
    <text x="815" y="140" transform="scale(.1)" fill="#fff" >100%</text>
  </g>
</svg>
  `
  const str = badge({ style: 'flat', _: [] }, {
    "total": {
      "statements": {
        "total": 45,
        "covered": 25,
        "skipped": 0,
        "pct": 100
      },
    },
  } as any);
  expect(str).toEqual(svgStr);
});

it('test create case', async () => {
  const str = create({ style: 'flat', _: [], source: 'coverage2/coverage-summary.json', output: 'coverage2/svg.svg' });
  expect(str).toBeUndefined();
});

it('test cliHelp/exampleHelp case', async () => {
  expect(cliHelp()).toBeUndefined();
  expect(exampleHelp()).toBeUndefined();
});

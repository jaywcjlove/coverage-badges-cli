import FS from 'fs-extra';
import path from 'path';
import run from '../src';

it('test case', async () => {
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
  expect(dirs).toEqual(['badges.svg', 'coverage-summary.json', 'lcov-report', 'lcov.info']);
  expect(dirs).toEqual(expect.arrayContaining(['badges.svg', 'coverage-summary.json']));
});

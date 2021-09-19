import FS from 'fs-extra';
import path from 'path';
import run from '../src/index'

it('sum test case', async () => {
  expect(run()).toBeUndefined();
  const output = path.join(process.cwd(), 'coverage/badges.svg');
  expect(FS.existsSync(output)).toBeTruthy();
  const dirs = await FS.readdir(path.join(process.cwd(), 'coverage'));
  expect(dirs).toEqual(['badges.svg', 'coverage-summary.json', 'lcov-report', 'lcov.info']);
});

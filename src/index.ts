import minimist, { ParsedArgs } from 'minimist';
import { create } from './create';

export interface RunArgvs extends ParsedArgs {
  style?: 'flat' | 'flat-square' //| 'plastic' | 'for-the-badge' | 'social';
  source?: string;
  version?: string;
  output?: string;
}

export default function run() {
  const argvs: RunArgvs = minimist(process.argv.slice(2), {
    alias: {
      help: 'h',
      source: 's',
      output: 'o',
    },
    default: {
      style: 'flat',
      source: 'coverage/coverage-summary.json',
      output: 'coverage/badges.svg',
    },
  });
  if (argvs.h || argvs.help) {
    cliHelp()
    exampleHelp()
    return;
  }
  const { version } = require('../package.json');
  if (argvs.v || argvs.version) {
    console.log(`\n coverage-badges-cli v${version}\n`);
    return;
  }
  create(argvs);
}


export function cliHelp() {
  console.log('\n  Usage: coverage-badges <app-name> [options] [--help|h]');
  console.log('\n  Options:\n');
  console.log('    --version, -v ', 'Show version number');
  console.log('    --help, -h    ', 'Displays help information.');
  console.log('    --output, -o  ', 'Output directory.');
  console.log('    --source, -s  ', 'Output directory.');
  console.log('    --style       ', 'Badges style: flat, flat-square.');
}

export function exampleHelp() {
  console.log('\n  Example:\n');
  console.log('    \x1b[35mnpm\x1b[0m coverage-badges-cli \x1b[33m--output\x1b[0m coverage/badges.svg');
  console.log('    \x1b[35mnpm\x1b[0m coverage-badges-cli \x1b[33m--style\x1b[0m plastic');
  console.log('    \x1b[35mnpm\x1b[0m coverage-badges-cli \x1b[33m--source\x1b[0m coverage/coverage-summary.json');
  console.log('\n');
}
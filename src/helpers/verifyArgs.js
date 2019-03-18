import fs from 'fs';
import path from 'path';
import constants from '../core/constants';

const verifyArgs = (args) => {
  if (!args.input) {
    throw new Error('You have to specify input file.');
  }
  if (!fs.existsSync(args.input)) {
    throw new Error(`File "${args.input}" does not exist.`);
  }
  if (!fs.lstatSync(args.input).isFile()) {
    throw new Error(`"${args.input}" is not a file.`);
  }
  if (path.extname(args.input).toLowerCase() !== '.json') {
    throw new Error(`"${args.input}" is not a JSON file.`);
  }
  if (!args.output) {
    throw new Error('You have to specify output directory.');
  }
  if (!fs.existsSync(args.output)) {
    throw new Error(`Directory "${args.output}" does not exist.`);
  }
  if (!fs.lstatSync(args.output).isDirectory()) {
    throw new Error(`"${args.output}" is not a directory.`);
  }
  if (!args.mode) {
    throw new Error(`You have to specify mode ("${constants.MODE_DDL}" or "${constants.MODE_CSV}").`);
  }
  if (args.mode !== constants.MODE_DDL && args.mode !== constants.MODE_CSV) {
    throw new Error(`Invalid mode "${args.mode}".`);
  }
};

export default verifyArgs;

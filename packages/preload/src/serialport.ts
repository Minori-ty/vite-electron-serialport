// const serialport = require('serialport');
import { list as ls } from 'serialport';
export async function list() {
  return await ls();
}

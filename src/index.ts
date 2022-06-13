import { exit2, init2 } from './jsDOC';
import { exit, init } from 'myPackage';

const a = init2({ debug: true, url: 'test' });
const b = exit2(13);

const c = init({ url: 'url' });
const d = exit(3);

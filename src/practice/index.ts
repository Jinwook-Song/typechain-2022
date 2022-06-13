import { exit2, init2 } from './jsDOC';
import { exit, init } from 'myPackage';

init2({ debug: true, url: 'test' });
exit2(13);

init({ url: 'url' });
exit(3);

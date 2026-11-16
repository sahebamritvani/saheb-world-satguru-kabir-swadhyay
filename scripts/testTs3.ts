import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const sf = ts.createSourceFile('test.ts', 'const a = 1;', 99, true);
console.log('Success!', sf.fileName);

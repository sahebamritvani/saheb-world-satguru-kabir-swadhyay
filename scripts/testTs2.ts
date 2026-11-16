import tsm from 'typescript';
const ts = (tsm as any).default || tsm;
const sf = ts.createSourceFile('test.ts', 'const a = 1;', 99, true);
console.log('Success creating source file:', sf.fileName);

import tsm from 'typescript';
const ts = (tsm as any).default;
console.log('TS type:', typeof ts, Object.keys(ts).slice(0, 5));
if (ts.createSourceFile) {
  console.log('ts.createSourceFile exists!');
  const sf = ts.createSourceFile('test.ts', 'const a = 1;', 99, true);
  console.log('SourceFile created successfully:', sf.fileName);
}

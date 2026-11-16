import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ts = require('typescript');

const filePath = path.join(process.cwd(), 'src/data/nitnem/prabhatPath.ts');
const code = fs.readFileSync(filePath, 'utf8');

const program = ts.createProgram({
  rootNames: [filePath],
  options: { noEmit: true }
});

const diagnostics = ts.getPreEmitDiagnostics(program);

diagnostics.forEach((diagnostic: any) => {
  if (diagnostic.file) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
    console.log(`Line ${line + 1}, Col ${character + 1}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
  } else {
    console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
  }
});

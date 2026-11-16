import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/nitnem/prabhatPath.ts');
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(/    \],\s*\n\s*\/\//g, '    ],\n  },\n\n  //');

fs.writeFileSync(filePath, code, 'utf8');
console.log('Fixed section closing braces in prabhatPath.ts');

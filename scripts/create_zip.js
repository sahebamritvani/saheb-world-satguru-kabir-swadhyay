const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Use tar or node zip if needed, or tar.gz / python shutil ignoring node_modules
const pyScript = `
import shutil, os

def get_ignore(path, names):
    ignored = set()
    for name in names:
        if name in ['node_modules', '.git', 'dist', '.cache', 'public/saheb-world-app.zip', 'saheb-world-app.zip']:
            ignored.add(name)
    return ignored

shutil.make_archive('public/saheb-world-app', 'zip', root_dir='.', base_dir='.', ignore=get_ignore)
print("ZIP_SUCCESS")
`;

fs.writeFileSync('/tmp/make_zip.py', pyScript);
try {
  const out = execSync('python3 /tmp/make_zip.py').toString();
  console.log(out);
} catch (e) {
  console.error(e);
}

const fs = require('fs');
const { execSync } = require('child_process');

// Clean previous zip
try { fs.unlinkSync('public/saheb-world-app.zip'); } catch(e){}
try { fs.rmSync('/tmp/app_clean', { recursive: true, force: true }); } catch(e){}

const pyScript = `
import shutil, os

def get_ignore(path, names):
    ignored = set()
    for name in names:
        if name in ['node_modules', '.git', 'dist', '.cache', 'saheb-world-app.zip']:
            ignored.add(name)
    return ignored

shutil.copytree('.', '/tmp/app_clean', ignore=get_ignore, dirs_exist_ok=True)
shutil.make_archive('public/saheb-world-app', 'zip', '/tmp/app_clean')
print("ZIP_SUCCESS")
`;

fs.writeFileSync('/tmp/make_zip.py', pyScript);
try {
  const out = execSync('python3 /tmp/make_zip.py').toString();
  console.log(out);
} catch (e) {
  console.error(e, e.stdout?.toString(), e.stderr?.toString());
}

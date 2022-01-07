const fs = require('fs');
const { notify } = require('node-notifier');
const lib = require('./modules');

let dirs;
const init = (pathToDir) => {
  dirs = lib.checkDir(pathToDir);
  const files = lib.readFiles(pathToDir);
  lib.sortFiles(files, pathToDir);
  return null;
};

lib.requestPath('Enter path to Download folder: ').then((path) => {
  if (!path) throw new Error('Incorrect path');
  init(path);

  fs.watch(path, (changes, file) => {
    if (dirs.includes(file)) {
      notify({
        title: 'Sorted function',
        message:
          'Your files was saved and sorted\nDont worry!\nJust check your download dir)',
        sound: false,
      });
    }
    init(path);
  });
});

const fs = require('fs');
const path = require('path');

const checkDir = (pathToDir) => {
  const dirs = ['exe', 'pdf', 'image', 'torrent', 'music', 'text'];

  dirs.forEach((dirName) => {
    if (!fs.existsSync(path.join(pathToDir, dirName))) {
      fs.mkdir(path.join(pathToDir, dirName), (err) => {
        if (err) throw err;
        console.log('Folder was created');
      });
    }
  });
  return dirs;
};

module.exports = { checkDir };

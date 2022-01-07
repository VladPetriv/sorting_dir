const lib = {};

['checkDirs', 'readFiles', 'sortFiles', 'requestPath'].forEach((name) => {
  const sub = require(`./lib/${name}.js`);
  Object.assign(lib, sub);
});

module.exports = lib;

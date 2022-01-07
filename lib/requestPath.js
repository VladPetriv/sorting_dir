const readline = require('readline');

const requestPath = async (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function question(q) {
    return new Promise((resolve) => rl.question(q ?? '', resolve));
  }
  let answer = await question(query);
  rl.close();
  return answer;
};

module.exports = { requestPath };

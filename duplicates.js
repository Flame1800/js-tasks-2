const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let current = null;
let result = ''

rl.once("line", () => {
  rl.on("line", (line) => {
    if (line !== current) {
      current = line;
      result += `${line}\n`
    }
  }).on('close', () => console.log(result));
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let length, count;
let result;

let line = 0;
rl.on('line', (input) => {
  const splitted = input.split(/\s/g).map(Number);

  if (line === 0) {
    length = splitted[0]
    count = splitted[1]
  }
  else if (line === 1) result = splitted
  else {
    const type = splitted[0];
    const num1 = splitted[1];
    const num2 = splitted[2];
    
    result = runCommand(type, result, num1, num2);

    if(line === count + 1) {
      console.log(result.join(' '))
    }
  }

  line++;
})

function runCommand(type, array, ...args) {
  switch(type) {
    case 1:
      array[args[0] - 1] += args[1];
      
      return array;
    default:
      let result = [];
      
      for (let i = 0; i < length; i++) {
        result[(type === 2 ? args[0] + i: (length - args[0]) + i) % length] = array[i]
      }

      return result;
  }
}
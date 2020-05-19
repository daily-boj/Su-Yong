const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(/\(/g);

console.log(input[0].split('@').length - 1, input[1].split('@').length - 1)
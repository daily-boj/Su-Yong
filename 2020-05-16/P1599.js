// a b k d e g h i l m n ng o p r s t u w y

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(/\s/g);

const order = {
  'a': 0,
  'b': 1,
  'k': 2,
  'd': 3,
  'e': 4,
  'g': 5,
  'h': 6,
  'i': 7,
  'l': 8,
  'm': 9,
  'n': 10,
  'ng': 11,
  'o': 12,
  'p': 13,
  'r': 14,
  's': 15,
  't': 16,
  'u': 17,
  'w': 18,
  'y': 19,
};

let result = [];
const length = Number(input[0]);

for (let i = 1; i < length + 1; i++) {
  result[i - 1] = input[i].split('').reduce((acc, now, index) => {
    if (!!acc.length > 0 &&
      acc[acc.length - 1] === 'n' &&
      now === 'g') {
      acc.pop();
      return [...acc, 'ng'];
    }
    else return [...acc, now];
  }, []);
}

result = result.sort((a, b) => {
  let check = a.length - b.length;
  for (let i in a) {
    if (order[a[i]] === order[b[i]]) continue;
    else {
      check = order[a[i]] - order[b[i]];
      break;
    }
  }

  return check;
});

for (const r of result) {
  console.log(r.join(''));
}
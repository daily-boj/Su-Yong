const fs = require('fs');
const [str1, str2, target] = fs.readFileSync('/dev/stdin').toString().split(/\s/g);

let result = ''

let count1 = 0
let count2 = 0
for (let i in target) {
  i = Number(i)
  
  if (str1.length >= count1 && str1[count1] == target[i] && detect(str2.substring(count2), target.substring(i + 1))) {
    result += '1'
    count1++
  } else {
    result += '2'
    count2++
  }
}

console.log(result)

function detect(part, next) {
  let count = 0
  for (let i in next) {
    if (part[count] == next[i]) {
      count++
    }
  }

  return count == part.length
}
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf-8')
const array = input.toString().split("\n")
const [jewels, stones] = array

let result = 0
const newJewels = [...new Set(jewels)]

for (let i = 0; i < newJewels.length; i++) {
    result += stones.split(newJewels[i]).length - 1
}

fs.writeFileSync('output.txt', result + '')
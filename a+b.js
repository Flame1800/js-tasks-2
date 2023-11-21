
const readline = require('readline')
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});

let numsString = ''

rl.on('line', (line) => {
    numsString = line
})

rl.on('close', () => {
	const [num1, num2] = numsString.split(" ")
	
    
    const sum = +num1 + +num2
	process.stdout.write(sum.toString())
    process.exit()
})

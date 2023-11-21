const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const lines = []

rl.on('line', line => lines.push(line)).on('close', () => {
    const [num] = lines
    const n = Number(num)

    const generate = (n, left, right, acc) => {
        if (acc.length === 2 * n) {
            return acc
        }
        if (left < n) {
            return generate(n, left + 1, right, acc + '(')
        }
        if (left > right) {
            return generate(n, left, right + 1, acc + ')')
        }
    }
    const result = generate(n, 0, 0, "")

    console.log(result)
    rl.close()
})
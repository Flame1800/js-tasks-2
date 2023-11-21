const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const lines = []

rl.on('line', line => lines.push(line)).on('close', () => {
    const [tRoom, tCond] = lines[0].split(' ').map(Number)
    const mode = lines[1]

    let result = 0

    switch (mode) {
        case 'freeze':
            result = tRoom < tCond ? tRoom : tCond
            break;
        case 'heat':
            result = tRoom > tCond ? tRoom : tCond
            break;
        case 'auto':
            result = tCond
            break;
        case 'fan':
            result = tRoom
            break;
    }

    console.log(result)
    rl.close()
})
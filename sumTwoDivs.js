const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const lines = []

rl.on('line', line => lines.push(line)).on('close', () => {
    const [nums] = lines;
    const [numerator1, denumenator1, numerator2, denumenator2] = nums.split(" ").map(el => +el);

    let numRes = 0;
    let denumRes = 0;

    if (denumenator1 === denumenator2) {
        numRes = numerator1 + numerator2;
        denumRes = denumenator1;
    }

    maxDiv = numRes > denumRes ? numRes : denumRes;


    for (let i = maxDiv; i >= maxDiv; i--) {
        if (numRes % i === 0 && denumRes % i === 0) {
            numRes /= i;
            denumRes /= i;
        }
    }

    console.log(numRes, denumRes);
    rl.close()
})
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const lines = []

rl.on('line', line => lines.push(line)).on('close', () => {
    const [params, arrayStr] = lines;
    const [length, countRequests] = params.split(" ");

    let currLineNum = 2
    const array = arrayStr.split(" ");
    for(let i = 0; i < countRequests; i++) {
        const [begin, end] = lines[currLineNum].split(" ");

        let min = +array[begin]
        for (let i = +begin; i < +end + 1; i++) {
            if (array[i] < +min) {
                min = +array[i];
            }
        }

        let res = "NOT FOUND"
        for (let i = +begin; i < +end + 1; i++) {
            if (+array[i] > min) {
                res = array[i];
                break;
            }
        }

        console.log(res);
        currLineNum++;
    }
    
    rl.close()
})
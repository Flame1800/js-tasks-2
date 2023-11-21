const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


const lines = []

rl.on('line', line => lines.push(line)).on('close', () => {
    const [newNum, ...numbers] = lines.map(num => num.replace(/[-()+]/g, ''))

    // 0. Почистить номера от символов
    // 1.1. Определить длину символов: 11 | 7
    // Если длина 7, то сверить последние 7 симв у нового номера
    // Если у нового номера 7, то сверять последние 7 сивм у остальных

    // 1.2. Проверить есть ли 7 или 8 в начале
    // 1.3 Проверить совпадение 10 чисел, не считая первый символ
    // 2. ОК

    for (number of numbers) {
        if (number.length === 7 && newNum.slice(-7) === number) {
                console.log("YES")
        }
        else if (number.length === 11 && (number[0] === '7' || number[0] === '8')) {
            if (newNum.slice(-7) === number.slice(-7)) {
                console.log("YES")
            }
            else {
                console.log("NO")
            }
        } 
        else {
            console.log("NO")
        }
    }

    rl.close()
})
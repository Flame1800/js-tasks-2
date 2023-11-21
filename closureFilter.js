const inBetween = (a, b) => {
    return (num) => {
        return a <= num && num <= b
    }
}

const inArray = arr => {
    return (num) => {
        return arr.indexOf(num) !== -1
    }
}

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
var compress = function(chars) {
    const countedChars = {}

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]
      countedChars[char] = countedChars[char] ? countedChars[char] + 1 : 1
    }

    const result = Object.entries(countedChars).reduce((acc, curr) => {
      const [char, count] = curr

      return [...acc, char, "" + count]
    }, [])


    return result
};

console.log(compress('aaabbbccc'))
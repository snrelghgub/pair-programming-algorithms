function scrabbleScore(str) {
    let sum = 0;
    let newStr = str.toUpperCase();

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== " ") {
            sum += $dict[newStr[i]];
        }
    }
    return sum;
}
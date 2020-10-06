const binaryArrayToNumber = arr => {

    // your code
    let result = 0;
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] == 1) {
            result += Math.pow(2, arr.length - 1 - i);
        }
    }
    return result;
};
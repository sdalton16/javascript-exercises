const removeFromArray = function(...args) {
    let arr = args[0];
    let len = arr.length;
// use filter method?

    const test = function (value) {
        for (let i = 0; i < len; i++) {
            if (value === arr[i]) {
                arr.splice(i, 1);
            }
        }
    }

    for (let j = 1; j < args.length; j++) {
        test(args[j]);
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;

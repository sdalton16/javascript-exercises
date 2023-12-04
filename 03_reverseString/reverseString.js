const reverseString = function(string) {
    let original = string;
    let reversed = [];
    let index = 0;

    let len = original.length;

    for (i = len - 1; i >= 0; i--) {
        reversed[index] = original[i];
        index++;
    }

    reversed = reversed.toString();
    reversed = reversed.replaceAll(',','')

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

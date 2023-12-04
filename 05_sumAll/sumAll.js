const sumAll = function(start, end) {
    let finalSum = 0;

    if (typeof(start) !== 'number' || typeof(end) !== 'number') {
        return 'ERROR';
    }

    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (start > end) {
        let temp = 0;
        temp = start;
        start = end;
        end = temp;
    }

    for (let i = start; i <= end; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

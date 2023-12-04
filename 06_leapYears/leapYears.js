const leapYears = function(year) {
    let check1 = false;
    let check2 = true;

    if (year % 4 === 0 ) {
        check1 = true;
    }

    if (year % 100 === 0) {
        check2 = false;
        if (year % 400 === 0) {
            check2 = true;
        }
    }

    if (check1 === true && check2 === true) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

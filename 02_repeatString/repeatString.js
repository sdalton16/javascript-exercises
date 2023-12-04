const repeatString = function(string, num) {
    let result_str ='';
    if (num < 0) {
        return 'ERROR';
    }
    
    else {
        for (i = 0; i < num; i++) {
            result_str += string;
        }
        return result_str;
    }    
        
};

// Do not edit below this line
module.exports = repeatString;

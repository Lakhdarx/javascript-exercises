const repeatString = function(word, n) {

    if (n < 0) return ('ERROR');
    let result = word;
    for (let i = 1; i < n; i++) {
        result += word;
    }
    if (n === 0) return '';
    else return result;


};

// Do not edit below this line
module.exports = repeatString;

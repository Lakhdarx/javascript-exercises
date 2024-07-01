const reverseString = function(word) {
    let wordReverse = '';
    for (let i = word.length-1; i >=0; --i) {
        wordReverse += word[i];
    }
    return wordReverse;
    // A better way to do it is using JS built-in function
    // return (word.split('').reverse().join(''));

};

// Do not edit below this line
module.exports = reverseString;

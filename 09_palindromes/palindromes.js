const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleanStr = str
        .toLowerCase()
        .split('')
        .filter((item) => alphanumerical.includes(item))
        .join('');

    let reverse = cleanStr
        .split('')
        .reverse()
        .join('');
    


    return cleanStr === reverse;

};

// Do not edit below this line
module.exports = palindromes;

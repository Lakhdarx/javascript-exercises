const palindromes = function (str) {

    let cleanStr = str
        .split('')
        .filter((item => (item !== ',' && item !== '.' && item !== '!' && item !== ' ' && item !== ';') ))
        .join('')
        .toLowerCase();

    let reverse = cleanStr
        .split('')
        .reverse()
        .join('');
    


    if (reverse === cleanStr) return true;
    else return false;

};

// Do not edit below this line
module.exports = palindromes;

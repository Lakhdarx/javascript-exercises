const removeFromArray = function(arr, ...elements) {
    for (let i of elements) {
        let k = arr.indexOf(i);
        if (k !== -1) arr.splice(k,1);
        if (arr.indexOf(i) !== -1) removeFromArray(arr, i);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

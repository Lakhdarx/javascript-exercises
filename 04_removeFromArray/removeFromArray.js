const removeFromArray = function(arr, ...args) {
    return (arr.filter((element) => !args.includes(element)));  // the filter method returns a new array thats why 
};                                                              // we put a return in advance



// Do not edit below this line
module.exports = removeFromArray;


// Recursive method.
// const removeFromArray = function(arr, ...elements) {
    // for (let i of elements) {
        // let k = arr.indexOf(i);
        // if (k !== -1) arr.splice(k,1);
        // if (arr.indexOf(i) !== -1) removeFromArray(arr, i);
    // }
    // return arr;
// };





// Map method
// const removeFromArray = function(arr, ...args) {
    // args.map((arg) => {
        // for (let i = 0; i < arr.length; i++) {
            // if (arr[i] === arg) {
                // arr.splice(i,1);
                // --i;
            // }
        // }
    // })
    // return arr;
// };
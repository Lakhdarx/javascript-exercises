const fibonacci = function(num) {
    if (typeof(num) === 'string') num = Number(num);
    if (num < 0) return('OOPS');
    if (num === 1 || num === 0) return num;
    else {
        return fibonacci(num-1) + fibonacci(num-2);
    }
}



// Do not edit below this line
module.exports = fibonacci;




// const fibonacci = function(num) {
    //     if (typeof(num) === 'string') num = Number(num);
    //     if (num < 0) return ('OOPS');
    //     else if (num === 0 || num === 1) return num;
    //     let a = 0;
    //     let b = 1;
    //     let x;
    
    //     for (let i = 2; i <= num; i++) {
    //         x = b + a;
    //         a = b; 
    //         b = x;
    //     }
    //     return x;
    // };
    
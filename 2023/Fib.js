let count = 0;
function fib(n){
    const fib = [0,1];

    for(let i = 2; i<n; i++){
        console.log(count++)
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib;
}

// console.log(fib([2]));
// console.log(fib([3]));
// console.log(fib([4]));
// console.log(fib([5]));
console.log(fib([100]));
function isPowerOfTwo(n){
    console.log(n)
    if(n === 1) return true;
    if(n % 2 === 1) return false;
    n = n/2;
    return isPowerOfTwo(n);
}

// console.log(isPowerOfTwo(1)) // true
// console.log(isPowerOfTwo(2)) // true
// console.log(isPowerOfTwo(4)) // true
// console.log(isPowerOfTwo(8)) // true

// console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(96)) // false
/*

Given a number, determine if that number is prime

*/
let count = 0;
function isPrime(n){
    if(n < 2) return false;
    if(n === 2) return true;
    if(n === 4) return false;
    for(let i = 2; i < Math.ceil(n/2); i++){
        count++
        if(n % i === 0){
            return false;
        }
    }
    console.log(count)
    return true;
}

console.log(isPrime(4)) // false
count = 0
console.log(isPrime(6)) // false
count = 0
console.log(isPrime(15))// false
count = 0
console.log(isPrime(2)) // true
count = 0
console.log(isPrime(3)) // true
count = 0
console.log(isPrime(5)) // true
count = 0
console.log(isPrime(11))// true
count = 0
console.log(isPrime(61))
count = 0
console.log(isPrime(97))
count = 0
console.log(isPrime(89))
count = 0
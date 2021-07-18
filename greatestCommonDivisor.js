/*
Given two integers, find the greatest common divisor (GCD).

Input: 52, 78

Output: 26

In mathematics, the GCD of two integers is the largest positive integer that is a factor of both integers. 
In the case both 52 and 78 are divisible by 26. Which also happens to be the largest common factor as well.
*/

function GCD(a, b){
    let smllst = a < b ? a : b;
    for(let i = Math.floor(smllst/2); i > 2; i--){
        if(a % i === 0 && b % i === 0) return i
    }
    return 'No Common Divisor';
}

function GCD(a, b){
    let smllst = a < b ? a : b;
    let lrgst = a > b ? a : b;

    if(a === 0 || b === 0){return lrgst};
    return GCD(smllst, lrgst % smllst);
}


console.log(GCD(78, 52));
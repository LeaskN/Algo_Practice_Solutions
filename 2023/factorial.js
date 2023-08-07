/*
    product of all possible integers less than or equal to n
    !0 = 1
*/
function factorial(n){
    let final = 1;

    for(let i = 1; i <= n; i++){
        final = final * i;
    }

    return final;
}

console.log(factorial(0))//24
console.log(factorial(1))//24
console.log(factorial(4))//24
console.log(factorial(5))//120

fizzBuzz = (num) => {
    finalArray = [];
    for (let i = 0; i < num; i++) {
        (i % 3 === 0 && i % 2 === 0) ? (finalArray.push('FizzBuzz')) :
        (i % 3 === 0) ? finalArray.push('Buzz') : 
        (i % 2 === 0) ? finalArray.push('Fizz') : 
        (finalArray.push(i));
    }
    return finalArray;
};

console.log(fizzBuzz(100));

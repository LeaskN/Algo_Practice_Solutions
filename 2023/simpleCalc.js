/*
Given a mathematical expression with just single digits, plus signs, negative signs, and brackets, evaluate the expression. Assume the expression is properly formed.

Example:
Input: - ( 3 + ( 2 - 1 ) )
Output: -4

*/

function calc(str){


  let current = findExpression(str) // 2 - 1
  Math.eval(current);

  if(Number(str) != NaN){
    return str;
  }
  
  calc(str);
}

function findExpression(str){
  for(let i = 0; i < str.length; i++){
    let exp = '';

    if(str[i] === ')') return exp
    if(str[i] === '(') exp = '';
    exp += exp + str[i];
  }
}
console.log(calc('- ( 3 + ( 2 - 1 ) )'))
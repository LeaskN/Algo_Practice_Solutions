function highAndLow(numbers){
  let realNumbers = numbers.split(' ');
  let highest = Number(realNumbers[0]);
  let lowest = Number(realNumbers[0]);
  realNumbers.forEach(number => {
    if (Number(number) > highest){
      highest = Number(number);
    }
    if (Number(number) < lowest){
      lowest = Number(number);
    }
  });
  return `${highest} ${lowest}`;
}

console.log(highAndLow('1 2 3 4 5 6'));
console.log(highAndLow('1 0 3 0 5 6')); 
console.log(highAndLow('.55 2 3 4 5 6'));
function findNb(m) {
  let totalVolume = 0;
  for (let i = 1; i < m; i++) {
    totalVolume += ( i**3 )
    if (totalVolume === m ) {
      return i;
    } else if(totalVolume > m)
    return (-1);
  }
}

console.log(findNb(4183059834009), 2022)
console.log(findNb(24723578342962), -1)
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568)
console.log(findNb(36), 3);
console.log(findNb(100), 4);
console.log(findNb(225), 5);
function cutCube(volume, n) {

  if (volume / n === 1 || volume / (n * Math.sqrt(n)) === 1 || volume / (n * n * n) === 1 && n >= 8) {
   
   return true;
  }
  return false;
}


console.log(cutCube(27,27)    , true);
console.log(cutCube(512,8)    , true);
console.log(cutCube(512,64)   , true);
console.log(cutCube(50000,50) , false);
console.log(cutCube(432,16)   , false);
console.log(cutCube(256,8)    , false);
console.log(cutCube(27,3)     , false);
console.log(cutCube(123,456)  , false);
console.log(cutCube(27,8)    , false);
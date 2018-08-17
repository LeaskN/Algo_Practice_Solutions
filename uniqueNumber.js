function findUniq(arr) {
  let unique = arr[arr.length - 1];
  let current;
  let last;
  let next;
  for(i=0; i < arr.length - 1; i++){
    current =  arr[i]
    last = arr[i-1];
    next = arr[i+1];
    if(current !== last && current !== next){
      unique = current;
    } else {
      unique = unique;
    }
  };
  return unique;
}

console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);

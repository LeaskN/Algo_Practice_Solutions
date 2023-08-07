function josephusSurvivor(a, b){
    let arr = [];
    let eliminator = 0;
    //create our array
    for(let i = 1; i < a+1; i++){
      arr.push(i);
    }
    //while our array is longer than one element
    while(arr.length>1){
      // our elinator is equal to itself + the number to remove - 1
      eliminator = eliminator + b-1;
      // while that eliminator is greater than our array.length - 1
      while(eliminator > arr.length-1){
        //the eliminator is equal to itself minus the array length
        eliminator = eliminator - arr.length;
      }
      arr.splice(eliminator,1);
    }
    return arr[0];
}

console.log(josephusSurvivor(7,3)); // 4
console.log(josephusSurvivor(11,19)); // 10
console.log(josephusSurvivor(1,300)); // 1
console.log(josephusSurvivor(14,2)); // 13
console.log(josephusSurvivor(100,1)); // 100

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
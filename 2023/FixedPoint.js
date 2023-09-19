// A fixed point in a list is where the value is equal to its index. So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list since the index and value is the same. Find a fixed point (there can be many, just return 1) in a sorted list of distinct elements, or return None if it doesn't exist.
let count = 0;
// linear/brute force
function findFixedPoint1(arr){
  let count = 0
  for(let i = 0; i < arr.length; i++){
    count++
    if(i === arr[i]){
      console.log('brute iterations: ', count)
      return i;
    }
  }
  return 'None';
}

// binary search
function findFixedPoint2(arr) {
  count = 0
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    count++
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === mid) {
      console.log('binary iterations: ', count)
      return mid; // Found a fixed point
    } else if (arr[mid] < mid) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }
  console.log('binary iterations: ', count)
  return 'None'; // No fixed point found
}

// console.log(findFixedPoint1([-5,  1, 3, 4, 5]));
// console.log(findFixedPoint2([-5,  1, 3, 4, 5]));
// console.log(findFixedPoint1([-5, -1, 2, 3, 4]));
// console.log(findFixedPoint2([-5, -1, 2, 3, 4]));
// console.log(findFixedPoint1([-5,  5, 7, 8, 9]));
// console.log(findFixedPoint2([-5,  5, 7, 8, 9]));
// console.log(findFixedPoint1([-50, -25, -12, -6, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18, 19, 20, 22]));
// console.log(findFixedPoint2([-50, -25, -12, -6, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17, 18, 19, 20, 22]));
console.log(findFixedPoint1([
  -100, -99, -98, -97, -96, -95, -94, -93, -92, -91,
  -90, -89, -88, -87, -86, -85, -84, -83, -82, -81,
  -80, -79, -78, -77, -76, -75, -74, -73, -72, -71,
  -70, -69, -68, -67, -66, -65, -64, -63, -62, -61,
  -60, -59, -58, -57, -56, -55, -54, -53, -52, -51,
  -50, -49, -48, -47, -46, -45, -44, -43, -42, -41,
  -40, -39, -38, -37, -36, -35, -34, -33, -32, -31,
  -30, -29, -28, -27, -26, -25, -24, -23, -22, -21,
  -20, -19, -18, -17, -16, -15, -14, -13, -12, -11,
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 100
]));
console.log(findFixedPoint2([
  -100, -99, -98, -97, -96, -95, -94, -93, -92, -91,
  -90, -89, -88, -87, -86, -85, -84, -83, -82, -81,
  -80, -79, -78, -77, -76, -75, -74, -73, -72, -71,
  -70, -69, -68, -67, -66, -65, -64, -63, -62, -61,
  -60, -59, -58, -57, -56, -55, -54, -53, -52, -51,
  -50, -49, -48, -47, -46, -45, -44, -43, -42, -41,
  -40, -39, -38, -37, -36, -35, -34, -33, -32, -31,
  -30, -29, -28, -27, -26, -25, -24, -23, -22, -21,
  -20, -19, -18, -17, -16, -15, -14, -13, -12, -11,
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 100
]));

/*
Given a sorted array and a given element, find that element

Brute: loop over entire array
Fast: binary search
  - find middle is the target less or more
  - find middle of that
  - repeat
*/
const findMeHf = function(t, s, e, a) {
  if (s > e) return 'Not Found';

  const m = Math.floor((s + e) / 2);

  if (a[m] === t) return `Found at index ${m}`;
  if (a[m] > t) return findMeHf(t, s, m - 1, a);
  if (a[m] < t) return findMeHf(t, m + 1, e, a);
}

function findMe(t, arr) {
  const s = 0;
  const e = arr.length - 1;
  return findMeHf(t, s, e, arr);
}

console.log(findMe(1, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
console.log(findMe(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMe(300, [100,200,300,400,500]));
console.log(findMe(6, [1,2,3,4,5,6]));
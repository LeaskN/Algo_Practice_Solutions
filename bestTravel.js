
// function chooseBestSum(t, k, ls) {
//   let currentBest = 0;
//   let count = 0;
//   if(ts.length < k){
//     return null;
//   }
//   forLoop(k, count);
//   for (let i = 0; i < ts.length; i++) {
//     for (let j = i+1; j < ts.length; j++) {
//       for (let k = j+1; k < ts.length; k++) {
//         if (ts[i] + ts[j] + ts[k] === t) {
//           return t;
//         }
//         if (ts[i] + ts[j] + ts[k] > currentBest && ts[i] + ts[j] + ts[k] < t) {
//           currentBest = ts[i] + ts[j] + ts[k];
//         }
//       }
//     }
//   }
//   return currentBest;
// }

// function forLoop(k, count){
//   console.log(k, count);
//   if (count < k) {
//     count = count+1;
//     for (let i = 0; i < ts.length; i++) {
//       console.log(count);
//     }
//   }
//   return "done"
// }

// // let ts = [50, 55, 56, 57, 58]
// // console.log(chooseBestSum(163, 3, ts), 163)
// // ts = [50]
// // console.log(chooseBestSum(163, 3, ts), null)
// ts = [91, 74, 73, 85, 73, 81, 87]
// console.log(chooseBestSum(230, 3, ts), 228)
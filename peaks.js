function pickPeaks(arr){
    let obj = {pos:[],peaks:[]};
    for (let i = 1; i < arr.length-1; i ++) {
        //if the number is higher than the next and last ones, its a peak
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            obj.pos.push(i);
            obj.peaks.push(arr[i]);
        //if the number is larger than the previous but also equal to the next
        } else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
            //save the first numbers position to access if this is a pleatea-peak
            let firstRepeat = [];
            firstRepeat.push(i);
            firstRepeat.push(arr[i]);
            //loop over the repeated numbers and beyond
            for (let j = i+1; j < arr.length-1; j++) {
            //check the next number to see if it's higher than the one after. If true return the saved number
            //check the next number to see if its higher than the previous one
            //repeat this process until we hit a break (or end of original loop)
                if (arr[j] > arr[j+1]) {
                    obj.pos.push(firstRepeat[0]);
                    obj.peaks.push(firstRepeat[1]);
                    break;
                } else if (arr[j] < arr[j+1]) {
                    break;
                } 
            }
        }
    }
  return obj;
}
console.log(pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ]));// { pos: [ 2, 7, 14, 20 ], peaks: [ 5, 6, 5, 5 ] }
console.log(pickPeaks([1,1,1,1]));//,{pos:[],peaks:[]});
console.log(pickPeaks([ 2,0,12,-2,1,1,8,15,1,-2,14,5,15,-2,13,10,4,13,9,11,2,5,-2,9,6,8,6,5,-1,1,13,5,13,9,2,5,-1,0 ]));
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));//, {pos:[3,7,10], peaks:[6,3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]));//, {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([ 2, 1, 3, 1, 2, 2, 2, 2 ]));//, { pos: [ 2 ], peaks: [ 3 ] }
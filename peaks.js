function pickPeaks(arr){
    let finalObject = {pos:[], peaks:[]};
    for (let j = arr.length-1; j >= 0; j--) {
        const backValue = arr[j];
        const nextBackValue = arr[j-1];
        if (backValue === nextBackValue) {            
            arr.splice(j, 1);
        } else {
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const nextValue = arr[i+1];
        const lastValue = arr[i-1];
        if (value > lastValue && value >= nextValue) {
            finalObject.pos.push(i);
            finalObject.peaks.push(value);
        }
    }
    return finalObject;
}
console.log(pickPeaks([]));
console.log(pickPeaks([1,1,1,1]));//,{pos:[],peaks:[]});
console.log(pickPeaks([ 2,0,12,-2,1,1,8,15,1,-2,14,5,15,-2,13,10,4,13,9,11,2,5,-2,9,6,8,6,5,-1,1,13,5,13,9,2,5,-1,0 ]));
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));//, {pos:[3,7,10], peaks:[6,3,2]});
console.log(pickPeaks([2,1,3,1,2,2,2,2,1]));//, {pos:[2,4], peaks:[3,2]});
console.log(pickPeaks([ 2, 1, 3, 1, 2, 2, 2, 2 ]));//, { pos: [ 2 ], peaks: [ 3 ] }
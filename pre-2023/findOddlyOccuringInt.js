let findOddInt = function (array){
    let intCount = {};
    let result = [];
    // console.log(intCount[2]);
    
    for (let number = 0; number < array.length; number++) {
        const element = array[number];
        if (intCount[element]) {
            intCount[element]++
        } else {
            intCount[element] = 1;
        }
    }
    
    for (const number in intCount) {
        if ((intCount[number] % 2 )== 1) {
            result.push(number)
        }
    }
    return result;
}
console.log(findOddInt([1,1,2,2,2,3,3,3,3,5,5,5,5,5,9,9,9,9,10,10,10]))
console.log(findOddInt([1,3,5,6,1,5,2,1,23,4,6,8,2,6,2,6,9,0,1,23,42,42,4,2]));

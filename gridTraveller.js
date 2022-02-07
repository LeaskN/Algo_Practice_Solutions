function gridTraveller(w,h, memo = {count: 1}){
    const key = `${w}_${h}`
    memo['count']++
    if(key in memo) return memo[key];
    if(w === 1 &&  h === 1) return 1;
    if(w === 0 ||  h === 0) return 0;

    memo[key] = gridTraveller(w-1, h, memo) + gridTraveller(w, h-1, memo)
    console.log(memo['count'])
    return memo[key];
}

console.log(gridTraveller(1,1))
console.log(gridTraveller(2,3))
console.log(gridTraveller(3,2))
console.log(gridTraveller(3,3))
console.log(gridTraveller(18,18))
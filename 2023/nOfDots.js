function totalAmountVisible(topNum, numOfSides){
    let total = 0;
    for(let i = 1; i <= numOfSides; i++){
      total+=i;
    }
    let bot = numOfSides+1 - topNum;
    return total - bot;
}
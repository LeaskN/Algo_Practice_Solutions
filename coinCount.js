let coinCounting  = function (change){
    if (change === 0){
        return "Used 0 coins.";
    }
    let coinCount = 0;
    let coinType = [25, 10, 5,1];
    for (let i = 0; i < coinType.length; i++) {
        const coin = coinType[i];
        coinCount = coinCount + Math.floor(change/coin);
        change = change % coin;
        if (change === 0){
            return "Used " + coinCount + " coins.";
        } 
    }
}

console.log(coinCounting(66));
console.log(coinCounting(31));
console.log(coinCounting(26));
console.log(coinCounting(30));
console.log(coinCounting(73));
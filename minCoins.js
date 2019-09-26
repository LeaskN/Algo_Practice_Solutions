// in this situation we can be missing a coin type (comment out a quater, dime, or nickle (not penny)).
let minCoins  = function (change){
    let coinCount = 0;
    let coinType = [
        25, 
        10, 
        5,
        1
    ];
    let coinCountFirst = Math.floor(change/coinType[0]);
    let coinCountSecond = Math.floor(change/coinType[1]);
    if(change < 10){
        return "Used " + change + " coins.";
    } else if ( change >= 50){
        return startWithFirst(change, coinCount, coinType);
    } 
    else {
        if (change - coinCountFirst*coinType[0] < change - coinCountSecond*coinType[1]) {
            return startWithFirst(change, coinCount, coinType);
        } else {
            return startWithSecond(change, coinCount, coinType);
        }
    }   
}
let startWithFirst = function(change, coinCount, coinType) {
    for (let i = 0; i < coinType.length; i++) {
        const coin = coinType[i];
        coinCount = coinCount + Math.floor(change/coin);
        change = change % coin;
        if (change === 0){
            return "Used " + coinCount + " coins.";
        } 
    }
}
let startWithSecond = function(change, coinCount, coinType){
        for (let i = 1; i < coinType.length; i++) {     
        const coin = coinType[i];        
        coinCount = coinCount + Math.floor(change/coin);
        change = change % coin;
        if (change === 0){
            return "Used " + coinCount + " coins.";
        } 
    }
}

console.log(minCoins(66));
console.log(minCoins(31));
console.log(minCoins(26));
console.log(minCoins(0));
console.log(minCoins(30));
console.log(minCoins(50));
console.log(minCoins(27));
console.log(minCoins(52527));
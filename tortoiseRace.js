function race(v1, v2, g){
    h = Math.floor(g/(v2 - v1));
    m = Math.floor((g % (v2 - v1)) * 60 / (v2 - v1));
    s = Math.floor((((g % (v2 - v1)) * 60) % (v2 - v1)) * 60 / (v2 - v1));
    if ( v1 >= v2 ) {
      return "None";
    }
    return [h, m, s]
}
console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
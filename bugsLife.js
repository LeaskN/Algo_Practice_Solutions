function shortestDistance(a, b, c) {
  
  if (Math.sqrt((a+c)*(a+c)+(b*b)) > Math.sqrt((b+c)*(b+c)+(a*a)) && Math.sqrt((b+c)*(b+c)+(a*a)) < Math.sqrt((a+b)*(a+b)+(c*c))) {
    return Math.sqrt((b+c)*(b+c)+(a*a))
  }
  else if (Math.sqrt((a+c)*(a+c)+(b*b)) < Math.sqrt((b+c)*(b+c)+(a*a)) && Math.sqrt((a+c)*(a+c)+(b*b)) < Math.sqrt((a+b)*(a+b)+(c*c))){ 
    return Math.sqrt((a+c)*(a+c)+(b*b))
  } else {
    return Math.sqrt((a+b)*(a+b)+(c*c))
  }
}

console.log(shortestDistance(1, 2, 3), 4.242640687119285);
console.log(shortestDistance(1, 1, 1), 2.23606797749979);
console.log(shortestDistance(134, 191.5, 45.5), 262.47380821712477);
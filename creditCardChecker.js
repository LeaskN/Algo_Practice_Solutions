function getIssuer(number) {
  const fiftys = ['51', '52', '53', '54', '55'];
  let numberString = number.toString()
  if (numberString.length === 13 && (numberString.slice(0,1) == 4)){
    return "VISA";
  }  
  if (numberString.length === 16){
    if (numberString.slice(0,4) == 6011){
      return "Discover";
    } else if (numberString.slice(0,1) == 4){
    return "VISA";
    } else if (fiftys.indexOf(numberString.slice(0,2)) >= 0){
      return "Mastercard";
    } 
  }
  if (numberString.length === 15){
    return "AMEX";
  } 
  return "Unknown";
}
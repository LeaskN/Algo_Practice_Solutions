var uniqueInOrder=function(iterable){
 
  var newArray = [];
 
   for (var i = 0; i < iterable.length; i++) {
     var eleBefore = iterable[i - 1];
     var eleCurrent = iterable[i];
     var eleAfter = iterable[i + 1];
 
     if(eleCurrent === eleBefore){
       continue; 
     }
     else {
       newArray.push(iterable[i]);
     }
   }
   return newArray;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
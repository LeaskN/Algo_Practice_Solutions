function gooseFilter (birds) {
    let notGeese = [];
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    for (i = 0; i < birds.length; i++){
      let current = birds[i];
      if (geese.indexOf(current) === -1){
        notGeese.push(current);
      }
    }
    return notGeese;
}
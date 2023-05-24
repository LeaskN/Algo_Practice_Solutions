function stringCheck(str1, str2){
    console.log(makeMap(str1), makeMap(str2))
}

function makeMap(str){
    let output = new Object(str.split(''));
    console.log(output);
}

console.log(stringCheck('thisisastring', 'astringthisis'))
function commonChild(s1, s2) {
    let currentStringForwards = s2;
    let finalStringForwards = ''
    s1.split('').forEach(letter => {
        if(currentStringForwards.indexOf(letter) > -1){
          finalStringForwards += letter;
          currentStringForwards = currentStringForwards.slice(currentStringForwards.indexOf(letter)+1);
        }
    })

    let currentStringBackwards = '';
    s1.split('').forEach(letter => currentStringBackwards = letter + currentStringBackwards)
    let finalStringBackwards = '';
    for(let i = s2.length-1; i >= 0; i--){
        let letter = s2[i];

        if(currentStringBackwards.indexOf(letter) > -1){
            finalStringBackwards += letter;
            currentStringBackwards = currentStringBackwards.slice(currentStringBackwards.indexOf(letter)+1);
        }
    }
    console.log(finalStringForwards, finalStringBackwards)
    return finalStringBackwards.length > finalStringForwards.length ? finalStringBackwards.length : finalStringForwards.length;
}

console.log(commonChild(    'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 
                            'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'))
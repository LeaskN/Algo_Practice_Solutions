/*
    given a string, find the longest palindromic substring 
    Ex:
        Input: 'abcdefghijklmoomlkjpqrstuv' => klmoomlk
Brute force:
- look for a pair
- slide one to the right and one to the left
- check that new pair
- keep going until you find a non-pair (recursion)
- save that string and then proceed from where that original pair was 

*/
const longestPalindromicSubstring = function(str){
    if(str.length === 1) return str;
    let m = str[0]; // max

    for(let i = 0; i < str.length; i++){
        let l = i;
        let r = i+1;
        let p = false;
        let palStr = '';
        // if they are the same move to next letters
        if(str[l] === str[r] && str[r]){
            p = true;
            while(p){
                palStr = str[l] + palStr;
                palStr += str[r];
                r++;
                l--;
                if(str[l] !== str[r] || str[r] === undefined) p = false;
            }
            if (palStr.length > m.length) m = palStr;
        }
        r = i+2
        console.log(str[l] === str[r] && str[r])
        if(str[l] === str[r] && str[r]){
            console.log(str[l], str[r]);

            palStr = str[i+1];
            p = true;
            while(p){
                palStr = str[l] + palStr;
                palStr += str[r];
                r++;
                l--;
                if(str[l] !== str[r] || str[r] === undefined) p = false;
            }
            if (palStr.length > m.length) m = palStr;
        }
    }
    return m;    
}

// console.log(longestPalindromicSubstring('abcdefghijklmoomlkjpqrstuv'));
// console.log(longestPalindromicSubstring('babad'));
// console.log(longestPalindromicSubstring('bb'));
console.log(longestPalindromicSubstring('ccc'));

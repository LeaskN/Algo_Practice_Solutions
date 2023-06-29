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
    let m = str[0];

    for(let i = 0; i < str.length-1; i++){
        let p = false;
        let palStr = '';

        const makePal = function (l, r, str){
            if(str[l] === str[r]){
                if(r-l === 2) {
                    palStr = str[i+1]
                };
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
            return m;
        }
        m = makePal(i, i+1, str);
        m = makePal(i, i+2, str);
    }
    return m;    
}

console.log(longestPalindromicSubstring('abcdefghijklmoomlkjpqrstuv')); // jklmoomlkj
console.log(longestPalindromicSubstring('babad')); // bab
console.log(longestPalindromicSubstring('bb')); // bb
console.log(longestPalindromicSubstring('ccc'));// ccc

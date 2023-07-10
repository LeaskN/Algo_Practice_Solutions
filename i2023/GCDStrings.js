/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const rejoin = (s, nTimes) => (nTimes === 1) ? s : s + rejoin(s, nTimes - 1);

const gcdOfStrings = (str1, str2) => {
    let div = "";
    for (let i = 0; i < str2.length; i++) {
        let divNow = str2.slice(0, i + 1);
        if (str1.length % divNow.length === 0 && str2.length % divNow.length === 0) {
            if (str1 === rejoin(divNow, str1.length / divNow.length) && str2 === rejoin(divNow, str2.length / divNow.length)) {
                div = divNow;
            }
        }
    }
    return div;
};
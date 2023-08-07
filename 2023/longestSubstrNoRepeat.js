/*
    Given a string, find the length of the longest substring without repeating characters.
    ex: abrkaabcdefghijjxxx => 10

    Strategy 1:
        brute force = > iterate over the string, looking for longest strings, if longest save and repeat from next letter

    Stragety 2:
        start at the front and count to duplicate
        every character add to a map
        when you hit a duplicate, check if it's the longest you've seen => set or dont set as the longest
        delete first letter from map
        move the left side of the set
        repeat until both values reach the end OR the current length is already shorter than the longest

*/
let count = 0;

function longestSubstringNoRepeatBrute(str) {
    let map = {};
    let longest = 0;
    let currentStrLen = 0;

    for (let i = 0; i < str.length; i++) {
        const currentChar1 = str[i];
        currentStrLen = 1;

        map[currentChar1] = 1;

        for (let j = i + 1; j < str.length; j++) {
            const currentChar2 = str[j];
            console.log(count++);
            if (map[currentChar2] === 1) {
                if (currentStrLen > longest) {
                    console.log('change', currentStrLen);
                    longest = currentStrLen;
                }
                map = {};
                break;
            } else {
                map[currentChar2] = 1
            }
            currentStrLen++
        }
    }

    return longest;
}

function longestSubstringNoRepeat(str) {
    let map = {};
    let left = 0;
    let longest = 0;

    if (str.length === 0 || str.length === 1) return str.length;

    for (let i = 0; i < str.length; i++) {
        while (map[str[i]]) {
            map[str[left]] = 0;
            left++;
        }

        map[str[i]] = 1;
        longest = longest > i - left + 1 ? longest : i - left + 1;
    }

    return longest;
}


// console.log(longestSubstringNoRepeat('abrakcdefghiajyz12jxxx'));
console.log(longestSubstringNoRepeat('abrxya'));
console.log(longestSubstringNoRepeat('abrakcdefghiajyz12jxxx'));
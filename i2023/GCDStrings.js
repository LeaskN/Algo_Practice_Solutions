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
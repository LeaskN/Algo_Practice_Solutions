function sumFactorial(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let factorial = 1;
        for (let j = num; j > 0; j--) {
            factorial *= j;
        }
        total += factorial;
    }
    return total;
}
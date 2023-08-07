function queueTime(customers, n) {
    let queue = customers.length > 0;
    let lines = [];
    if (customers.length < n){
        return Math.max.apply(null, customers);
    } else if (queue === true) {
        for (let i = 0; i < n; i++) {            
            lines.push(0);       
        }
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
    }
    console.log(lines);
    // return Math.max.apply(null, customers)
}

function fillTills(customers, lines){
    console.log(customers);
    for (let i = 0; i < lines.length; i++) {        
        lines.push(lines[i]);
    }
    return lines;
}
// console.log(queueTime([], 1))// 0);
console.log(queueTime([1,2,3,4], 1))// 10);
console.log(queueTime([2,2,3,3,4,4], 2))// 9);
console.log(queueTime([1,2,3,4,5], 100))// 5);
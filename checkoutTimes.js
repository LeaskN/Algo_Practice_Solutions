// function queueTime(customers, n) {
//     // if we have customers then there is a queue
//     let queue = customers.length > 0;
//     // the checkout is the amount of customers who can checkout at once (therefore splice from 0 to number of tills)
//     let checkout = customers.splice(0, n);
//     // time alloted to check out, starts at zero and will be modified    
//     let timeAlotted = 0;
//     // while there is a queue
// 	while(queue) {
//         // we havent added anyone to the queue so the time remaining is zero
//         let timeRemaining = 0;
        
//         // iterate through the number of checkout customers
// 		for (let i = 0; i < checkout.length; i++) {
//             // if there is a customer with time over 0 seconds
// 			if (checkout[i] > 0) {
//                 // remove 1 from their value
//                 checkout[i]--;
//                 // if the customer value is over 0 seconds and they exist
// 			} if (checkout[i] === 0 && customers.length > 0) {
//                 // remove them from the checkout
//                 checkout.splice(i,1, customers[0]);
//                 // remove them from customers
// 				customers.splice(0,1);
//             } 
//             timeRemaining += checkout[i];
// 		} timeAlotted++;
// 		if (timeRemaining === 0) {
// 			queue = false;
// 		}
// 	} return timeAlotted;
// }
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
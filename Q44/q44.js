"use strict";
/* 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function
call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
function sandwich(items) {
    if (items.length !== 0) {
        console.log('Your order is being prepared');
        for (let item of items) {
            console.log(`Add a ${item} to your Sandwich`);
        }
        console.log('your Sandwich is ready.');
    }
    else {
        console.log("No Place any Order");
    }
}
const item_1 = ['Tomatoes', 'Lettuce', 'Onions', 'Peppers'];
const item_2 = ['Onion', 'Peppers', 'Cucumbers', 'Olives'];
const item_3 = ['cucumbers', 'Olives', 'Sprouts', 'Avocado'];
const item_4 = [];
sandwich(item_1);
sandwich(item_2);
sandwich(item_3);

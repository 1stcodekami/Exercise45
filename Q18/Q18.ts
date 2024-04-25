/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

let places_list : string[] = ["Dubai" , "London" , "Istanbul" , "Canada" , "Sydney"];
console.log("Original order",places_list);       //Print in original order.
console.log("Alphabetical order",[...places_list].sort()) //Print in Alphabetical order.
console.log("Still in original order",places_list);       //Again print to check its original order.
console.log("Reverse alphabetical order",[...places_list].sort().reverse()) //Print in reverse alphabetical order.
console.log("Still in original order",places_list);       //Again print to check its original order.
console.log("Reverse order of original list",places_list.reverse()) //Reverse order of original list.
console.log("Again reverse order of reverse list",places_list.reverse()) //Again reverse, reverse order of original list.




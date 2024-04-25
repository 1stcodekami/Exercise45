/*16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

import { appendFile } from "fs";


let guest_list : string[] = ["Hasnain","Ali","Kashif"];
let invitation : string = "I am hosting a dinner party and would be honored if you could join us."
for (let i=0 ; i<guest_list.length ; i++){
    console.log(`Mr.${guest_list[i]}, ${invitation}`);
}

let absent : string = "Ali"
console.log(`Mr. ${absent} can't make it`);

guest_list[guest_list.indexOf("Ali")] = "Umair"; //Put new gust Umair in the place of absent guest Ali


for (let i=0 ; i<guest_list.length ; i++){
    console.log(`Mr.${guest_list[i]}, ${invitation}`);
}

let info : string = ("I am informing you that I am found a bigger dinner table.")

for (let i=0 ; i<guest_list.length ; i++){
    console.log(`Mr.${guest_list[i]}, ${info}`);
}

guest_list.unshift("Moin");       //add new one(Guest) at first position of array.
let middle_index = (guest_list.length)/2;       //Find middle Index Number.
guest_list.splice(middle_index,0,"Imtiaz");      //add new one(Guest) at middle position of array.
guest_list.push("Abrar");
for (let i=0 ; i<guest_list.length ; i++){
    console.log(`Mr.${guest_list[i]}, ${invitation}`);
}

export{guest_list}


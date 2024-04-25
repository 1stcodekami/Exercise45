"use strict";
/*16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ["Hasnain", "Ali", "Kashif"];
exports.guest_list = guest_list;
var invitation = "I am hosting a dinner party and would be honored if you could join us.";
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr.".concat(guest_list[i], ", ").concat(invitation));
}
var absent = "Ali";
console.log("Mr. ".concat(absent, " can't make it"));
guest_list[guest_list.indexOf("Ali")] = "Umair"; //Put new gust Umair in the place of absent guest Ali
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr.".concat(guest_list[i], ", ").concat(invitation));
}
var info = ("I am informing you that I am found a bigger dinner table.");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr.".concat(guest_list[i], ", ").concat(info));
}
guest_list.unshift("Moin"); //add new one(Guest) at first position of array.
var middle_index = (guest_list.length) / 2; //Find middle Index Number.
guest_list.splice(middle_index, 0, "Imtiaz"); //add new one(Guest) at middle position of array.
guest_list.push("Abrar");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr.".concat(guest_list[i], ", ").concat(invitation));
}

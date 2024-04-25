/*17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
var guest_list = ["Hasnain", "Ali", "Kashif"];
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
// For Q17
console.log("I Inform all of you i just found out that my new dinner table won\u2019t arrive in time for the dinner\nso i can invite only two people for dinner");
var sorry_message = " Sorry i can’t invite you to dinner.";
for (var i = guest_list.length - 1; i >= 2; i--) {
    console.log("Mr.".concat(guest_list[i], ", ").concat(sorry_message));
    guest_list.pop();
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr.".concat(guest_list[i], ", you are still invited")); //message for remaining two.
}
guest_list.pop();
guest_list.pop();
console.log(guest_list); // Print for empty list.

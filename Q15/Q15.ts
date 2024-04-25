/* 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */

let gust_list : string[] = ["Hasnain","Ali","Kashif"];
let invitation : string = "I am hosting a dinner party and would be honored if you could join us."
for (let i=0 ; i<gust_list.length ; i++){
    console.log(`Mr.${gust_list[i]}, ${invitation}`);
}

let absent : string = "Ali"
console.log(`Mr. ${absent} can't make it`);

gust_list[1] = "Umair";

for (let i=0 ; i<gust_list.length ; i++){
    console.log(`Mr.${gust_list[i]}, ${invitation}`);
}

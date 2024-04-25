//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var gust_list = ["Hasnain", "Ali", "Kashif"];
var invitation = "I am hosting a dinner party and would be honored if you could join us.";
for (var i = 0; i < gust_list.length; i++) {
    console.log("Mr.".concat(gust_list[i], ", ").concat(invitation));
}

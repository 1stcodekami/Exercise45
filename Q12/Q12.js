//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friends_name = ["Kashif", "Imtiaz", "Imran", "Ali", "Qasim"];
var message = "what are you doing today?";
for (var i = 0; i < friends_name.length; i++) {
    console.log("Hello ".concat(friends_name[i], ", ").concat(message));
}

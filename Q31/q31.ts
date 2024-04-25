/* 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
 • If the list is empty, print the message We need to find some users!
 • Remove all of the usernames from your array, and make sure the correct message is printed. */

 let uname : string[] = ["Kashif" , "Imran" , "Saeed" , "admin" , "Nadeem" , "Farhan"];
 if(uname.length == 0){
     console.log("We need to find some user!")
 }
 else{
     console.log("We already have some users")
 }
 
 uname = [];    //Remove all of the usernames from your array.
 if(uname.length == 0){
     console.log("We need to find some users!")
 }
 
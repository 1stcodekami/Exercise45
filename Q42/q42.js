/* 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
var magicians_list = ['David Blaine', 'Ricky Jay', 'Derren Brown'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_magicians = magicians_1[_i];
        console.log(name_magicians);
    }
}
show_magicians(magicians_list);
// End of Exercise 41.
// Start Exercise 42.
function make_great(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var great = magicians_2[_i];
        var modify_magician = magicians.shift();
        magicians.push("".concat(modify_magician, " the Great"));
    }
}
make_great(magicians_list);
show_magicians(magicians_list);

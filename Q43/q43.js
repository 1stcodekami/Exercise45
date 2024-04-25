/* 43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have
one array of the original names and one array with the Great added to each magician’s name.*/
var magicians_list = ['David Blaine', 'Ricky Jay', 'Derren Brown'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var name_magicians = magicians_1[_i];
        console.log(name_magicians);
    }
}
//show_magicians(magicians_list)
// End of Exercise 41.
// Start Exercise 42.
// function make_great(magicians: string[]) {
//     for (let great of magicians) {
//        let  modify_magician = magicians.shift();
//        magicians.push(`${modify_magician} the Great`);
//     }
// }
//    make_great(magicians_list)
//    show_magicians(magicians_list)
// End of Exercise 42.
function make_great2(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var great = magicians_2[_i];
        var modify_magician = magicians.shift();
        magicians.push("".concat(modify_magician, " the Great"));
    }
    return magicians;
}
console.log("Original magicians");
show_magicians(magicians_list);
var new_array = make_great2(magicians_list);
console.log("Great magicians");
show_magicians(new_array);

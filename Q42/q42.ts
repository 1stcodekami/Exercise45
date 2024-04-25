/* 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

let magicians_list: string[] = ['David Blaine' , 'Ricky Jay' , 'Derren Brown'];

function show_magicians(magicians: string []){
    for (let name_magicians of magicians) {
        console.log(name_magicians);
    }
}

show_magicians(magicians_list)

// End of Exercise 41.

// Start Exercise 42.

function make_great(magicians: string[]) {
    for (let great of magicians) {
       let  modify_magician = magicians.shift();
       magicians.push(`${modify_magician} the Great`);
    }
}
   make_great(magicians_list)
   show_magicians(magicians_list)



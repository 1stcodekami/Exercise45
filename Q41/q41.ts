// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians_list: string[] = ['David Blaine' , 'Ricky Jay' , 'Derren Brown'];

function show_magicians(magicians: string []){
    for (let name_magicians of magicians) {
        console.log(name_magicians);
    }
}

show_magicians(magicians_list)
/* 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, meassage) {
    console.log("size of shirt ".concat(size));
    console.log("meassage to print on a shirt ".concat(meassage));
}
make_shirt('"medium"', '"I love typescript"');
make_shirt('"Large"', '"I love GenAI"');

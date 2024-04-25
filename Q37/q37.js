/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt(size, meassage) {
    if (size === void 0) { size = '"large"'; }
    if (meassage === void 0) { meassage = '"I love typeScript"'; }
    console.log("size of shirt ".concat(size));
    console.log("meassage to print on a shirt ".concat(meassage));
}
make_shirt(); // For Shirt size large with defult meassage.
make_shirt('Medium'); // For shirt size Medium with defult meassage.
make_shirt('Small', '"I love GenAI"'); // For shirt size Small with new meassage.

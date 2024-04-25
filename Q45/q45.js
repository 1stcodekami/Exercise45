/* 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or
an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function car_info(manufacturer, model) {
    var extraInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraInfo[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, extraInfo_1 = extraInfo; _a < extraInfo_1.length; _a++) {
        var _b = extraInfo_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Example usage:
var finalList = car_info("Honda", "City", ["color", "silver"], ["year", "2021"]);
console.log(finalList);

var pname = "muhammad kamran khurshid";
console.log(pname + "\n");
// For Lowercase 
console.log(pname.toLowerCase() + "\n");
//For Uppercase
console.log(pname.toUpperCase() + "\n");
// For Titlecase
console.log(pname.replace(/\b\w/g, function (s) { return s.toLocaleUpperCase(); }));

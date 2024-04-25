let pname : string = "muhammad kamran khurshid"
console.log(pname+"\n");
// For Lowercase 
console.log(pname.toLowerCase()+"\n");
//For Uppercase
console.log(pname.toUpperCase()+"\n");
// For Titlecase
console.log(pname.replace(/\b\w/g, s=> s.toLocaleUpperCase()));
//String Object Methods

var a ="Hello Word.";
var b ="I am a student.";
var temp = new Array();
temp = b.split(" ");

console.log(a+" "+b);   //"Hello Word. I am a student."
console.log(b.indexOf("t"));    //8
console.log(b.lastIndexOf("t"));    //13
console.log(a.charAt(7));   //"0"
console.log(a.charCodeAt(7));   //111
console.log(b.length);  //15
console.log(temp);  //["I", "am", "a", "student."]
console.log(a.slice(2,7));  //"llo W"
console.log(a.substring(2,7));  //"llo W"
console.log(a.substr(2,7)); //"llo Wor"
console.log(a.toLowerCase());   //"hello word."
console.log(b.toUpperCase());   //"I AM A STUDENT."

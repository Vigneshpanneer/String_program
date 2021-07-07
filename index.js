//CharAt(X) 
let mytext = 'JavaScript Code'

console.log(mytext.charAt(4)) ;

//charCodeAt (X)  // unicode value
let message="HelloWorld"
alert(message.charAt(5))

let that = 'myJavaScriptCode'

console.log(that.charAt(3));

//concat
let abc = 'Hello'
console.log(abc +' '+'Friend'  +' '+ 'How are you');

let xyz = abc.concat( ' ' +'chennai') // combines one or more strings

console.log(xyz);

alert(xyz)


//indexOf
let myword ="Hi, my name is vicky!"
if (myword.indexOf("vicky")!=-1)
console.log("vicky is in there!")
//indexOf
let mycode = 'Hello this is my JavaScript'
if (mycode.indexOf('JavaScript')!=-1)
alert("JavaScript is there!")

//replace
let myreplace = 'My25 JavaScript Coders';
console.log(myreplace.replace(RegExp( "My25"), "The"));

let abcd = 'My JavaScript Codes'
console.log(abcd.replace(/My/i,"First"));


// Slice [start,End]
let text = "JavaScript"
console.log(text.slice(3, 7));

//split(delimiter)
let mymessage = "Welcome to JavaScript"
let word = mymessage.split("t")
console.log(word);

//substring(from, [to])
let myString = 'My javascript code';
myString = myString.substring(0, 14);
console.log(myString)

//toLowerCase()
let mylowercase = 'My JAVASCriPT Code';
mylowercase = mylowercase.toLowerCase();
console.log(mylowercase)

// toUpperCase
let myUppercase = 'My JAVAscript Code';
myUppercase = myUppercase.toUpperCase();
console.log(myUppercase);

//repeat()
let string = "Welcome to JavaScript code";
string.repeat(4);
console.log(string.repeat(3));

//trim()
let str = "     Hello vicky!     ";
alert(str.trim());

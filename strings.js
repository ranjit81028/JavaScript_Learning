let str = "ranjit";
// writing of str in js
console.log(`Hello my name is ${str}. what is your name`);
// another way of writing string
let str2 = new String(`kumar`);
console.log(str2.length);// tells the string's length
console.log(str2[4]);
console.log(str2.toUpperCase());// converts the string into uppercase
console.log(str2.charAt(3));// tells character at index 3
console.log(str2.indexOf('u'));// tells the index of u
// making of substring
const newstr = str2.substring(0, 3); // it includes the starting index but not the last index
// newstr = `kum`
console.log(newstr);
// but if you want to reverse the string u can use the slice method
const anthrstr = str2.slice(-5, 3);
console.log(anthrstr);
// trim method is used to remove the  spaces at starting and ending
const str3 = `   hello     my      name     is    ranjit    kumar    `;
console.log(str3);
console.log(str3.trim());
// replacing the str
const url = `https://helloranjit%20.com`;
console.log(url.replace('%20', '-'));
console.log(url.includes('hello'));// tells this str exist in url or not?

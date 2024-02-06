//Strings

//declare
var str = " My name is prabh!!!, how are you? ";


//string length
var strLength = str.length;


//access particular
var strChar = str[3];
var strCharAt = str.charAt(13);


//looping
for(let i = 0 ; i < str.length; i++){
    //console.log(str[i]);
}

//modify : replace
str = str.replace("prabh", "tanya");

//replace all
str = str.replaceAll("a","@");

//concat
str = str.concat("Good going?");
str = str + " Good?";

//trim 
str = str.trim();

//searching : return -1 if nothing
strSeaching = str.indexOf("how");


//multiple searching = if multiple occurrences and one value
strLastSeaching = str.lastIndexOf("@");

//boolean

//startswith : true or false : if string starts with the given char
strstartsWith = str.startsWith("e");

//ends with : true or false : if string ends with the given char
strendsWith = str.endsWith("?");

//substr : extract smthing from the string : startnum, endnum
strExtract12 = str.substring(12); //@ny@!!!, how @re you? Good going? Good?
strExtract = str.substring(12, 20); //@ny@!!!, how @re you? Good going? Good?

//print smthing before startnum
strExtractBefore = str.substring(12, -1);//My n@me is t

//slice : returns a section of string
strSlice = str.slice(-14, -1);//going? Good


//upper cases and lower cases
//toLowerCase, toUpperCase

//convert obj to string
const myobjt = {name:"PRabh"};
toStringOBjt = JSON.stringify(myobjt);

//string to object
toOBjyString = JSON.parse(toStringOBjt);

//string comparioson : return 0 and -1
str1= "apple"; str2= "apple";
strComp = str1.localeCompare(str2);

//string has something that i wanr to search
strInclude_ = str.includes("how");

//splitting :  String to array
splitarr = str.split(" ");

//Array to String
joinStr = splitarr.join(" ");


//Convert into to string
let num = 2;
intStr = num.toString(); // "2"
intStr = num.toString(2); // "10"
//console.log(joinStr);

/**
 * 
 * 
 * 
 */
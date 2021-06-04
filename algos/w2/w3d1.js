/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

// const str1 = "creature";
// const expected1 = "erutaerc"

// const str2 = "maple";
// const expected2 = "elpam"

function reverseStr(str){
    let newstr="";
    for (let i = str.length-1; i >=0; i--) {
        newstr+=str[i];
    }
    return newstr;
}
const str1 = "creature";
const str2 = "maple";
console.log(reverseStr(str1),reverseStr(str2))
/* ************************************************* */

/* function reverseStr(){
*/

// const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";
// const expected1 = "TNFLGPYW";

// const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

function acronym(str){
    let split_str = str.split(" "); //[a,b,c,d,e,f];
    let result = ""
    for(i=0; i<split_str.length; i++){
        result += split_str[i][0].toUpperCase();
    }
    console.log(result);
}    

// function acronym(str){
//     let str2=str[0];
//     for ( let i =0 ; i < str.length ; i++){
//       if(str[i] == " "){
//     str2 += str[i+1].toUpperCase();
//       }
//     } 
//     return str2; 
//   }
//   console.log(acronym("Live from New York, it's Saturday Night!"));


/* ************************************************* */
/* case insensitive string compare */
/*function compareNoCase(){
*/
var str5 = "Dad";
var str6 = "dad";
var str7 = "WeiRd MIxEd cASe";
var str8 = "weird mixed case";
function compareNoCase (str1,str2) {
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    if (str1==str2) {
        console.log("True")
    }
    else{
        console.log("False")
    }
}
compareNoCase(str5,str6);
compareNoCase(str7,str8);
//expected 12/15 correctly
function a(){
    return 35;
}
console.log(a())//expected=35, actual=35 as expected

function a(){
    return 4;
}
console.log(a()+a());//expected=8, actual=8 as expected

function a(b){
    return b;
}
console.log(a(2)+a(4));//expected=6, actual=6 as expected


function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));//expected=3,9, actual=3,9 as expected

function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));//expected=40, actual= 40 as expected

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));//expected=2, actual=4,lol for some reason read it as >

function a(b,c){
    return b*c;
}
console.log(10,3);//expected=10,3, actual=10,3 as expected
console.log( a(3,10) );//expected=30, actual=30 as expected

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);//expected=1,2,3,4,5,6,7,8,9, actual=3,
console.log(4);//expected=1,2,3,4,5,6,7,8,9, actual=4,aksgdakgaksjfkgjf the function wasn't called

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();//expected=3,6,9, actual=2,5,8,11,seems like I add one from who knows where

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);//expected=0,1,2,3,4,5,6,7,8,9, actual=0,1,2,3,4,5,6,7,8,9 as expected
console.log(a(0,10));//expected=1,2,3,4,5,6,7,8,9,0, actual=0,1,2,3,4,5,6,7,8,9,0 as expected

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}//expected no output as the function wasn't called, actual as expected

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}//expected no output as the function wasn't called, actual as expected

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);//expected=10, actual=10 as expected

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();//expected=15, actual=15 as expected
console.log(z);//expected=10, actual=10 as expected

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();//expected=15, actual=15 as expected
console.log(z);//expected=15, actual=15 as expected
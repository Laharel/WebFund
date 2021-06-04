//Challenge 1: Print Values and Sum
var testArr = [6,3,5,1,2,4]
var sum=0;
for(i=0;i<testArr.length;i++){
    sum+=testArr[i];
    console.log("Num "+testArr[i]+", Sum"+sum)
}
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

//Challenge 2: Value * Position
//[0,3,10,3,8,20]
var newArr=testArr;
for(j=0;j<newArr.length;j++){
    newArr[j]=j*newArr[j];
}
console.log(newArr)
//problem 1
function sigma(num){
    let sum = 0;
    if(num < 0){
        return "can't take negative value";
    }
    for(let i=0; i<=num; i++){
        if(num>0){
            sum += i;
        }
    }
    return sum;
}
console.log(sigma(3),sigma(-2));

//problem 2
function factorial(num){
    let x=1;
    if (num==0) {
        return x;
    }
    if(num<0){
        num=-num;
    }
    for (let i = 1; i <= num; i++) {
        x=i*x;
    }
    return x;
}
console.log(factorial(-3),factorial(0),factorial(5));

//problem 3
function fibonacci(num) {
    let arr=[0,1];
    if (num<2) {
        return "Syntax Error";
    }
    for (let i = 2; i <=num; i++) {
        arr.push(arr[i-1]+arr[i-2]);
        //arr[2]=(arr[1]+arr[0])=(1+0)=1
        //arr[3]=(arr[2]+arr[1])=(1+1)=2
        //arr[4]=(arr[3]+arr[2])=(2+1)=3
        //arr[5]=(arr[4]+arr[3])=(3+2)=5
        //arr[6]=(arr[5]+arr[4])=(5+3)=8
        //arr[7]=(arr[6]+arr[5])=(8+5)=13
    }
    return arr[arr.length-1];
}
console.log(fibonacci(7),fibonacci(1));

// problem 4:
function secondToLast(array){
    return array[array.length-2];
}
let arr1=[1,2,3,4,5];
console.log(secondToLast(arr1));

//problem 5
function nthtolast(arr,item) {
    if (item>arr.length-1) {
        return null;
    }
    return arr[arr.length-1-item];
}
console.log(nthtolast(arr1,2),nthtolast(arr1,6))

// problem 6:
function secondLargest(array){
    if(array.length < 2){
        return "minimum length is 2"
    }
    let max = array[0];
    let sec_max = 0;
    for(i=1; i<array.length; i++){
        if(max < array[i]){
            sec_max = max;
            max = array[i];
        }
        else if(sec_max < array[i]){
            sec_max = array[i];
        }
    }
    return sec_max;
}

let arr2=[1,2,3,7,5]
console.log(secondLargest(arr1),secondLargest(arr2));

//problem 7:
function doubleTrouble(arr) {
    let double=[];
    for (let i = 0; i < arr.length; i++) {
        double.push(arr[i]);
        double.push(arr[i]);
    }
    arr=double;
    return arr;
}
console.log(doubleTrouble(["five",3,"hello",2,-3,5]))
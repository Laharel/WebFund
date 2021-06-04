function getarray(){
    let arr=[];
    for(let i=1;i<256;i++){
        arr.push(i);
    }
    return arr;
}
console.log(getarray());

function sum_even_1000(){
    let sum=0;
    for(let i=0;i<1001;i+=2){
        sum+=i;
    }
    return sum;
}
console.log(sum_even_1000());

function sum_odd_5000(){
    let sum=0;
    for (let i=1;i<5001;i+=2){
        sum+=i;
    }
    return sum;
}
console.log(sum_odd_5000());

var arr1=[-5,2,5,12];
function itarray(arr){
    let sum=arr[0];
    for (let i=1;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(itarray(arr1));

function findmax(arr){
    let max=arr[0];
    for (let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}
console.log(findmax(arr1));

function findavg(arr){
    let sum=arr[0];
    let avg=0;
    for (let i=1;i<arr.length;i++){
        sum+=arr[i];
    }
    avg=sum/i;
    return avg;
}
console.log(findavg(arr1));

function getodd(){
    let arr=[];
    for(let i=1;i<50;i+=2){
        arr.push(i);
    }
    return arr;
}
console.log(getodd())

function greaterthan(arr,item){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>item){
            count+=1;
        }
    }
    return count;
}
console.log(greaterthan(arr1,3));

function squares(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i]= arr[i]*arr[i];
    }
    return arr;
}
console.log(squares(arr1));

function negatives(arr){
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]<0) {
        arr[i] = 0;
       } 
    }
    return arr;
}
console.log(negatives(arr1));

function maxminavg(arr) {
    let max=arr[0];
    let min=arr[0];
    let sum=arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum+=arr[i];
        if (max<arr[i]) {
            max=arr[i];
        }
        if (min>arr[i]) {
            min=arr[i];
        }
    }
    let avg=sum/i;
    let newarr=[max,min,avg];
    return newarr;
}
console.log(maxminavg(arr1))

function swap(arr){
    let a=arr[0];
    let b=arr[arr.length-1];
    arr[0]=b;
    arr[arr.length-1]=a;
    return arr;
}
console.log(swap(arr1));

function negtostr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            arr[i]="Dojo";
        }
    }
    return arr;
}
console.log(negtostr(arr1));
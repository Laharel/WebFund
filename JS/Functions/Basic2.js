function bigge(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            arr[i]="Big";
        }
    }
        return arr;
}
var arr1=[1,-2,3,0,5,-6,7];
console.log(bigge(arr1))

function printlo(arr) {
    let min=arr[0];
    let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min>arr[i]) {
            min=arr[i];
        }
        if (max<arr[i]) {
            max=arr[i];
        }
    }
    console.log(min)
    return max;
}
arr1=[1,-2,3,0,5,-6,7];
console.log(printlo(arr1))

function double(arr) {
    let double=[];
    for (let i = 0; i < arr.length; i++) {
    double.push(arr[i]*2);
    }
    return double;
}
console.log(double(arr1))

function countpos(arr) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            count ++;
        } 
    }
    return count;
}
console.log(countpos(arr1))

function evenodd(arr) {
    let counteven=0;
    let countodd=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 ==0){
            counteven++;
            countodd=0;
        }
        else if (arr[i]%2!=0) {
            counteven=0;
            countodd++;
        }
        if (counteven==3) {
            console.log("Even more so!")
            counteven=0;
        }
        else if(countodd==3){
            console.log("Thats odd!")
            countodd=0;
        }
    }
}
var arr2=[1,3,2,10,5,3,1,8,6,4];
evenodd(arr2)

function seconds(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i%2==1) {
            arr[i]++;
        }
        console.log(arr[i])
    }
    return arr;
}
seconds(arr1)

function strtonum(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}
var arr3=["hello","dojo","awesome","whole"];
console.log(strtonum(arr3))

function addseven(arr) {
    let sevens=[];
    for (let i = 0; i < arr.length; i++) {
        sevens.push(arr[i]+7);
    }
    return sevens;
}
console.log(addseven(arr1))

function reverse(arr) {
    let a=0;
    let b=0;
    for (let i = 0; i < Math.ceil(arr.length/2); i++) {
        a=arr[i];
        b=arr[arr.length-1-i];
        arr[i]=b;
        arr[arr.length-1-i]=a;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5,6,7]))

function negative(arr) {
    let minus=[];
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i]>0) {
            minus.push(-arr[i]);
        }
        else {
            minus.push(arr[i]);
        }
    }
    return minus;
}
console.log(negative(arr1))

function hungry(arr) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=="food") {
            count++;
            console.log("Yummy!")
        }
    }
    if (count==0) {
        console.log("I'm hungry")
    }
}
hungry(arr1);
hungry(["food",0,"hello","food"])

function swaptocenter(arr) {
    for (let i = 0; i < arr.length/2; i+=2) {
        let a= arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=a;
    }
    return arr1;
}
console.log(swaptocenter(arr1))


function scale(arr,item) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*item;
    }
    return arr;
}
console.log(scale(arr1,4))
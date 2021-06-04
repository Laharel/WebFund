var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);//8,6,7,5,3,0,9
}
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);//8,4,2,0
    } 
    else{
        console.log("That is odd!");//7,3,1
    }//That is odd,That is odd,8,4,2,0,That is odd
}
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);//NewArr=[-5,-2,-1]
        arr[i] = arr[i] * -1;//arr[3]=5,arr[5]=-2,arr[7]=-1
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";//arr[4]="Zero"
    }
    else{
        arr[i] = arr[i] * -1;//arr[0]=-1,arr[1]=-3,arr[2]=-8,arr[6]=-4
    }
}
console.log(arr);//[-1,-3,-8,5,Zero,2,-4,1]
console.log(newArr);//[-5,-2,-1]
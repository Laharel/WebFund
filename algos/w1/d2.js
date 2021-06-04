/*
  Recreate the pop method without using .pop()
  Remove and return the last item from a given array
  After removing an item from an array, what else changes?
*/
function pop(arr)
{
  var x=arr[arr.length-1];
  arr.length=arr.length-1;
  return x;
}
var arr=[1,2,3,4,5,6,7];
console.log(pop(arr));
console.log(arr);
/* ******************************************************************* */

/*
  Given an array and an item to search for,
  return the index where the item is found,
  return -1 to represent not found
  */ 
function search(arr,int){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==int){
            return i;
            break;
        }
        else{
            return -1;
        }
    }
}
var arr=[11,2,3,4,5];
console.log (search(arr,3))
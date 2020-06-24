// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

// declare a function taking an input, arr (parameter)
  // var max, = arr[0]
  // for loop start at 1, end on arr.length (iterate arr)
    // if statement compare arr[i] with max
  // return max

// function findMax(arr){
//   var max = arr[0];
//   for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max
// }

// findMax([-3,3,5,7,9,0,1,3,44,5])


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// declare a function, take an arr
// temp = first value
// first value = last value
// last value = temp
// return arr

// function swapVals(arr){
//   console.log(arr.length, "This is the arrays length")
//   var temp = arr[0];
//   arr[0] = arr[arr.length-1];
//   arr[arr.length-1] = temp;
//   return arr
// }
// swapVals([-3,3,5,7,9,0,1,3,44,5])

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// declare a function, arr as parameter
// declare a sum variable, 0
// find the sum and divide by arr.length
// for loop, iterate through arr
    // add arr[i] into sum
// return sum/arr.length

// function avg(arr){
//   var sum = 0;
//   console.log(arr.length, "This is my arr length")
//   for(let i =0; i < arr.length; i++){
//     console.log(arr[i], "Current arr value at index", i)
//     sum += arr[i]
//   }
//   return sum/arr.length
// }
// avg([1,3,5,7,20])


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// write a function, no parameter
// create the array
// for loop, start 1, end 50, count every other one
  // push into array
// return arr

// function arrOdd(){
//   var oddArr = [];
//   for(let value = 1; value < 50; value+=2) {
//     oddArr.push(value);
//   }
//   return oddArr
// }

// arrOdd()

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// declare a function, arr as parameter
// temp var??
// loop through the arr
    // reassign values as value*value
// return arr

// function squares(arr) {
//   for(let i=0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
//   }
//   return arr
// }

// squares([1,5,10,-2])

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7)

// declare a function, take arr and Y
// var count = 0
// for loop, iterate through arr
  // if value > y
    // increase count
// return count

// function greaterThanY(arr, y){
//   var count = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > y){
//       count++;
//     }
//   }
//   return count
// }

// greaterThanY([-3,3,5,7,9,0,1,3,44,5], 6)
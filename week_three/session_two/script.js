console.log("MY JS IS WORKING")

// Arrays


// var myArr = [2,4,6,8,10,11,13,15];
// console.log(myArr[5]);
// myArr[5] = "hello";
// console.log(myArr);

// Built-Ins

// myArr.push(17);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// Loop through arrays
// change even values to string "even"
// for(var x=0; x<myArr.length; x++){
//     console.log('arr['+x+']');
//     console.log("This is the current value:", myArr[x]);
//     if(myArr[x] % 2 == 0){
//         console.log("Found an even one");
//         myArr[x] = "even";
//     }
// }
// console.log(myArr);


// object structure
var array = {
    'pop': function(){
        // removes a value from an array
    }
    // 'push':
    // 'splice':
}

// funcito

// console.log(obj['students'][1])

// array.pop()

// console.log(obj)

// function scope(){
//     let x = 10;
//     return x
// }

// var result = scope();

// console.log(result);

// -   Declare function, expect arr as paramater
// -   make a new array  
// -   look for max, min, avg values (for loop!)
//     -   store max, min, avg
// -   push max, min, avg into new array
// -   return new array

// function maxMinAvg(arr){
//     var newArr = [];
//     var max = arr[0];
//     var min = arr[0];
//     var sum = 0;
//     for(let i=1; i<arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//         if(min > arr[i]){
//             min = arr[i];
//         }
//         sum += arr[i]
//     }
//     newArr.push(max);
//     newArr.push(min);
//     newArr.push(sum/arr.length);
//     return newArr
// }

// console.log(maxMinAvg([1,5,10,-2]))
// [10,-2,3.5]

// -   Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

// declare a function, arr parameter
// loop through arr
    // test if value is negative (0>)
        //  replace with 'Dojo'
// return arr

// function numToString(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 'Dojo'
//         }
//     }
//     return arr
// }


// console.log(numToString([-1,-3,2]))

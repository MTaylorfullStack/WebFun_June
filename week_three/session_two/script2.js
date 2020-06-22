// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// declare our function
// swap first and last values

// function swapVals(arr){
//     var temp = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = temp;
//     return arr
// }

// var testArr = [];
// for(let i = 2; i < 200; i+=2){
//     testArr.push(i);
// }


// console.log(swapVals(testArr))

// function hello(name){
//     console.log("Hello", name)
//     console.log("'ello again")
//     return 10
// }
// var sum = 2+2;
// console.log(sum);

// var result = hello("Justin");
// console.log(result);
// Swap pairs

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array

// declare a function, expecting numarr as param
// print second to last, arr.length-2
// loop through the numarr
    // conditional: odd?
        // return odd value


// function pOnerAnother(numArr){
//     console.log(numArr[numArr.length-2], "Second to last value");
//     for(let i = 0; i<numArr.length; i++){
//         if(numArr[i] % 2 == 1){
//             return numArr[i]
//         }
//     }
//     return "No odd values"
// }


// console.log(pOnerAnother([2,4,7,8,10,12,14]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

// function, take arr as param
// oddCount = 0
// evenCount = 0
// loop through array
    // if even
        // count even
        // if evenCount == 3
            // even more so
    // if odd
        // count odd
        // if oddCount == 3
            // thats odd

// function evensAndOdds(arr){
//     var oddCount = 0;
//     var evenCount = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             evenCount++;
//             oddCount = 0;
//             console.log(evenCount, "This many evens in a row")
//             if(evenCount == 3){
//                 console.log("Even more so")
//                 evenCount = 0;
//             }
//         } else {
//             oddCount++;
//             evenCount = 0;
//             console.log(oddCount, "This many odds in a row")
//             if(oddCount == 3){
//                 console.log("Wow thats odd")
//                 oddCount = 0;
//             }
//         }
//     }
// }

// evensAndOdds([1,2,1,1,1,2,2,2,1,2,1,1,1,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2])

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

// function arr, num as param
// loop through arr
    //  multiply arr[i] by num
// return arr

function scale(arr, num){
    for(let i = 0; i<arr.length; i++){
        arr[i] *= num;
    }
    return arr
}

console.log(scale([1,2,3,90,32,1], 10008))
// console.log("test");
// document.getElementById('head').innerHTML;

// Data Types

// Booleans

// True or False

// Numbers

var num = 10;

// Strings

var str = "anything I want don't";
var another_str = "Another string";
var both_strings = str + ' ' + another_str;

var back = `Think ${num}`
// console.log(both_strings)
// console.log(str, "This is another string")
// console.log(str[9], "This is the 9th index of str");

// Arrays




// console.log(arr[5][0], "I looked into a nested array!");


// Objects

var obj = {
    'key': 'value',
    'another_key': 10
}

// console.log(obj.another_key)

// Operators

console.log(num + 100);

// == is, used for comparison
// === used for comparison, takes type into account
// !== BANG operator, not
// % returns remainder from division
// if 1 % 1 == 0
num = 20
// if (num != 10){
//     console.log("num isn't ten")
// }

// if(10 == '10'){
//     console.log("They're the same")
// }
// if(10 === '10'){
//     console.log("They're the same with triple equals!")
// }

// if (email !== email){
//     dont log them in
// }
// else {
//     log them in
// }

var score = 25;

if(score < 50){
    console.log("You can do better than that");
}
else if(score < 400){
    console.log("Really...that's all you got")
}
else if(score < 500) {
    console.log("Wow..don't play anymore")
} else {
    console.log("Great work.")
}


// loops

// for, while

// for(Start, End, Iterating)

// print all numbers from 0 to 100

for(var i=0; i<=100; i++){
    if(i % 2 == 0) {
        console.log(i);
    }  
}
var arr = [2, 3, 4, "hello", "hi", [2,3], 3, 7, 3, "No", "Yes"];

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
str = "H";
while(str.length < 20) {
    str += "i";
}
console.log(str);
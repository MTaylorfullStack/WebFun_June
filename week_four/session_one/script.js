// Warm-Up: Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).


// The DOM

// console.log(document);



// GET vs SET

// document.getElementById('second').innerHTML = "Hello!";
// var element = document.getElementById('second').innerHTML;
// console.log(typeof(element));

// function sayHello(){
//     document.getElementById('second').innerHTML = "Hello!";
// }




// JQuery Functions


// $('#click').click(function (){
//     document.getElementById('second').innerHTML = "Hello!";
// })

// When first block is clicked, third block hide.
var green = false;

$('#first_block').click(function () {
    $("#third").hide();
    console.log(this, "This is this")
    console.log($(this), "This is $this")
    if(green == false){
        $(this).css("background-color", "green");
        green = true
    } else {
        $(this).css("background-color", "white");
        green = false;
    }
})


// $('#second_block').click(function() {
//     setTimeout(function() {
//         for(let i=0; i<10; i++){
//             console.log("This is i:", i)
//             if(i % 2 == 0){
//                 $("#third_block").css('background-color', 'red');
//                 console.log("change to red");
//             } else {
//                 $("#third_block").css('background-color', 'black');
//                 console.log("change to black");
//             }
//         }
//     }, 1000)
// })
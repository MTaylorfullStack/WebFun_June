console.log(document, "This is document after loading HTML");
var a = document.getElementById('content')
console.log(a)

function hello(){
    a.innerHTML = "<p>I changed this with JS</p>"
}

// var students = [
//     {name: 'Nathalie', locale: 'DC'},
//     {name: 'Michael', locale: 'Chicago'}
// ]
// console.log(students)

var vehicle = {
    make: 'Subaru',
    model: 'Impreza',
    year: 2000,
    owners: ['Jeremy', 'David', 'Chaya'],
}

console.log(vehicle, "This is my whole object");
console.log(vehicle.model, "My vehicle's model");
console.log(vehicle['year'], "This is my vehicle's year");
vehicle['year'] = 2004;
console.log(vehicle['year'], "This is my vehicle's year");

var arr = [2,4,6,8];
console.log(arr[1]);

// data types

// strings, numbers, booleans, arrays, objects

// conditionals

// if, else, else if

// loops

// repeating tasks, forward progression

// functions

// returns
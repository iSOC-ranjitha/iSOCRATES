var counter = 5;
var active = true;
//Array
var ArrayName = ['Ranju', 'Harshi', 'Madhu'];
//object
var person;
person = {
    name: 'Bipin',
    age: 5
};
var greeting;
greeting = function (names) {
    console.log('Hi' + names);
    return "Hi ".concat(names);
};
console.log(greeting("Ramesh"));

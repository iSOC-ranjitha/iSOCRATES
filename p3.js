//Modules

// const people = require('./people');

// console.log(people);


// multiple imports1
const data = require('./people');
console.log(data.people,data.ages);

// multiple imports2
const {people,ages}=require('./people');
console.log(people);
console.log(ages);


//OS

const os = require('os');
console.log(os.platform())
console.log(os.homedir());
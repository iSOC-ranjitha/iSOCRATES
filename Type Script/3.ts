let counter: number = 5;
let active: boolean = true;

//Array
let ArrayName: string[]=['Ranju','Harshi','Madhu'];

//object
let person:{
    name:string;
    age:number;
};
person ={
    name:'Bipin',
    age:5
};

let greeting:(names:string)=> string;
greeting = function(names:string){
    // console.log('Hi'+names);
    return `Hi ${names}`
};
console.log(greeting("Ramesh"));
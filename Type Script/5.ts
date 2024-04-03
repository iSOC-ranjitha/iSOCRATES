//Optional parameters: function
function greet(name?:string):void{
    if(name){
        console.log(`Hello ${name}`);
    }
    else{
        console.log("Hell, New User");
    }

}
greet();
greet("Ranjitha");

//Default parameters

function greet2(name:string="Ramu"):void{
    if(name){
        console.log(`Hello ${name}`);
    }
    else{
        console.log(`Hello ${name}`);
    }

}
greet2();
greet2("Ranjitha");

//Rest parameters
function sum(...numbers: number[]): void{
    let total=0;
    for(let num of numbers){
        total+=num;
    }
    console.log(total)
}
sum(1,2,3,4,5)

//Function Overloading
function reverse(str: string):string;
function reverse(arr:number[]):number[];
function reverse(value: string | number[]):string | number[]{
    if(typeof value === "string"){
        return value.split("").reverse().join("");
    }
    else{
        return value.slice().reverse();
    }
}
console.log(reverse("isocrates"));
console.log(reverse([1,2,3,4,5]))

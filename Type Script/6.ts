//OOP class

class Person{
    name:string;
    age:number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} old`);
    }
}
let P = new Person('Ranju',23);
P.greet()

//Access modifiers

class Employee{
    private salary:number;
    readonly hikePercentage: number = 0.15;

    constructor(){
        this.salary = 20000;
    }

    hike():number{
        this.salary = this.salary+this.salary*this.hikePercentage;
        return this.salary
    }
    getSalary():number{
        return this.salary;
    }

    setSalary(amount:number):void{
        this.salary = amount;

    }
}
class Bi extends Employee{
    bonus(){
        console.log("I Got yearly bonus")
    }
}

let Harshi=new Employee();
Harshi.setSalary(25000);
console.log(Harshi.getSalary());
console.log(Harshi.hike());

let Haru=new Bi();
Haru.setSalary(25000);
console.log(Haru.getSalary());
console.log(Haru.hike());
Haru.bonus();

//Abstract classes

abstract class CompanyLaws{
    abstract salaryDate(): void
}
class company extends CompanyLaws{
    salaryDate(){
        console.log('Salary date is 5th of every month');
    }

}
let isocrates = new company();
isocrates.salaryDate();
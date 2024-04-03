//OOP class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi, my name is ".concat(this.name, " and I'm ").concat(this.age, " old"));
    };
    return Person;
}());
var P = new Person('Ranju', 23);
P.greet();
//Access modifiers
var Employee = /** @class */ (function () {
    function Employee() {
        this.hikePercentage = 0.15;
        this.salary = 20000;
    }
    Employee.prototype.hike = function () {
        this.salary = this.salary + this.salary * this.hikePercentage;
        return this.salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (amount) {
        this.salary = amount;
    };
    return Employee;
}());
var Bi = /** @class */ (function (_super) {
    __extends(Bi, _super);
    function Bi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bi.prototype.bonus = function () {
        console.log("I Got yearly bonus");
    };
    return Bi;
}(Employee));
var Harshi = new Employee();
Harshi.setSalary(25000);
console.log(Harshi.getSalary());
console.log(Harshi.hike());
var Haru = new Bi();
Haru.setSalary(25000);
console.log(Haru.getSalary());
console.log(Haru.hike());
Haru.bonus();
//Abstract classes
var CompanyLaws = /** @class */ (function () {
    function CompanyLaws() {
    }
    return CompanyLaws;
}());
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    company.prototype.salaryDate = function () {
        console.log('Salary date is 5th of every month');
    };
    return company;
}(CompanyLaws));
var isocrates = new company();
isocrates.salaryDate();

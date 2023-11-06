"use strict";
// Basic types
let id = 5;
let lastname = 'Haha';
let isPublished = false;
let x = 5;
let nums = [1, 2, 3, 4, 5, 11];
let arr = [1, '88', true, 0, 'Aaaah!'];
nums.push(7);
x = 'hi-hi';
// Tuple
let fruit = [4, 'apples'];
// Tuple array
let fruits = [];
fruits.push([7, 'pears']);
fruits.push([1, 'ornge']);
// Union
let pid;
pid = 11;
pid = '22';
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Two";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log('ID:', id);
// Objects
const user = {
    id: 1,
    name: 'John'
};
const better_user = {
    id: 1,
    name: 'John'
};
// Type assirtion
let sid = 2;
let ppin = 7;
let customerId = sid;
let secondWay = ppin; // оч интуитивно
// Functions
function addNum(a, b) {
    return a + b;
}
console.log('function.check =', addNum(1, 18));
// void function
function log(message) {
    console.log(message);
}
log("hahahhaahha");
const Inter_usr = {
    id: 1,
    name: 'John'
};
const sum = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`; // долбоебические кавычки
    }
}
let bread = new Person(7, 'breadd');
let mike = new Person(1, 'idiot');
console.log(bread.register());
console.log(bread, mike);
// extending a class
class Employee extends Person {
    constructor(id, name, pos) {
        super(id, name);
        this.position = pos;
    }
    fired() {
        return `${this.name} is fired with shame`;
    }
}
let Max = new Employee(7, 'maximilian', 'huynia');
console.log(Max);
console.log(Max.fired());

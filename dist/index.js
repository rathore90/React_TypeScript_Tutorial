"use strict";
let id = 5;
let college = "Focus College";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
// it will expect an order
let person = [1, 'Pardeep', true];
// tuple with array
let employee;
employee = [
    [1, "Sam"],
    [2, "Jill"],
];
// union
let pid = 22;
pid = '22';
// enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
console.log(Direction.up);
const user = {
    id: 1,
    name: 'John'
};
// type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log("test");
const new_user = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
// classes in Typescript
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const myObject = new Person(1, "Pardeep");
console.log(myObject.register());
// extend a class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Jim", "Developer");
console.log(emp);
console.log(emp.register());

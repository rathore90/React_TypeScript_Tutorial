let id: number = 5
let college: string = "Focus College"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'Hello']

// Tuple
// it will expect an order
let person: [number, string, boolean] = [1, 'Pardeep', true]; 

// tuple with array
let employee: [number, string][]
employee = [
  [1, "Sam"],
  [2, "Jill"],
]

// union
let pid: string | number = 22
pid = '22'

// enums
enum Direction {
  up,
  down,
  left,
  right
}

console.log(Direction.up);

// objects
type User = {
  id: number,
  name: string
}

const user: User = { 
  id:1, 
  name: 'John'
}

// type Assertion
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number

// functions
function addNum(x: number, y: number): number{
  return x + y
}

console.log(addNum(1,2));

function log(message: string | number): void{
  console.log(message);
}

log("test");

// Interfaces
interface UserInterface {
  readonly id: number,
  name: string,
  age?: number
}

const new_user: UserInterface = { 
  id:1, 
  name: 'John'
}

// interface with funcitons
interface MathFunc{
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// classes in Typescript
class Person implements PersonInterface{
  id: number
  name: string

  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }

  register(){
    return `${this.name} is now registered`
  }
}

const myObject = new Person(1, "Pardeep");

console.log(myObject.register());

// extend a class
// Subclasses
class Employee extends Person{
  position: string

  constructor(id: number, name: string, position: string){
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, "Jim", "Developer")
console.log(emp);
console.log(emp.register());

// Generics - use to build reusable module
function getArray<S>(items: S[]): S[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'john', 'jill'])

numArray.push(5);
strArray.push('Jason')




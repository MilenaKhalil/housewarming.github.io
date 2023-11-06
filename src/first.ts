// Basic types

let id: number = 5
let lastname: string = 'Haha'
let isPublished: boolean = false
let x: any = 5
let nums: number[] = [1, 2, 3, 4, 5, 11]

let arr: any[] = [1, '88', true, 0, 'Aaaah!']

nums.push(7)

x = 'hi-hi'

// Tuple

let fruit: [number, string] = [4, 'apples']

// Tuple array

let fruits: [number, string][] = []
fruits.push([7, 'pears'])
fruits.push([1, 'ornge'])

// Union

let pid: string | number

pid = 11
pid = '22'

// Enums

enum Direction {     // по дефолту 0,1,2,3
    Up = 1,          // теперь 1,2,3,4
    Down,
    Left,
    Right,
}

enum Direction1 {     // can be a string also
    Up = 'Up',
    Down = 'Two',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction1.Up)

console.log('ID:', id)

// Objects

const user: {
    id: number | string,
    name: string
} = {
    id: 1,
    name: 'John'
}

type User = {               // made my own type!!!
    id: number | string
    name: string
}

const better_user: User = {
    id: 1,
    name: 'John'
}

// Type assirtion

let sid: any = 2
let ppin: any = 7
let customerId = <number>sid
let secondWay = ppin as number       // оч интуитивно

// Functions

function addNum(a: number, b: number):number {
    return a + b
}

console.log('function.check =', addNum(1,18))

// void function

function log(message: string | number): void {
    console.log(message)
}

log("hahahhaahha")

// interface                // type — for primitives

interface Inter {                 // made my own type!!!
    readonly id: number | string
    name: string
    age?: number                  // not nessesery
}

const Inter_usr: Inter = {
    id: 1,
    name: 'John'
}

// interface functions

interface InterFunc {
    (x: number, y: number): number
}

const sum: InterFunc = (x: number, y: number): number => x + y

// Classes

interface Example {
    id: number
    name: string
    age?: number

    register():string
}

class Person implements Example {
    id: number     // only exces within class (private)
    name: string     // only for the extended class (protected)
    age?: number

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered` // долбоебические кавычки
    }
}

let bread = new Person(7, 'breadd')
let mike = new Person(1, 'idiot')
console.log(bread.register())
console.log(bread, mike)

// extending a class     (!) subclass (!)

class Employee extends Person {
    position: string
    constructor (id: number, name: string, pos: string) {
        super(id, name)
        this.position = pos
    }
    fired () {
        return `${this.name} is fired with shame`
    }
}

let Max = new Employee(7, 'maximilian', 'huynia')
console.log(Max)
console.log(Max.fired())

// Generics

function arrgen <T>(items: T[]): T[] {     // same type
    return new Array().concat(items)
}

let ArrayNums = arrgen<number>([1, 2, 3, 4])   // define the type
let ArrayStr = arrgen<string>(['one', 'two', 'fourth'])

//   ArrayNums.push('Hi')   // shouldn't work (!)
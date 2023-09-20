"use strict";
// @ts-ignore
// let num: number = 5;
//
// num = 55
//
// const sum = (a: number, b: number) => {
//     return a + b
// }
//
// sum(5, 6)
//
// const isEven = (a: number): boolean => {
//     return a % 2 === 0
// }
//
// console.log(isEven(5))
//
//
// let num2: unknown;
// num2 = 5;
// num2 = 'test';
// num2 = true;
//
// if (typeof num2 === 'number') {
//     console.log(num2 + 5);
// } else if (typeof num2 === "boolean") {
//     console.log(num2);
// }
//
// const greet = (name: string, id: number) => {
//     return `Welcome ${name} and your id is ${id}`;
// }
//
// greet('Test', 5);
//
//
// const isPalindrome = (palin: string): boolean => {
//     let myPalin = palin.split('').reverse().join('');
//     return myPalin === palin
// }
//
// console.log(isPalindrome('12345'));
//
// const greet3 = (name: string, id: number): string => {
//     return `Welcome ${name} and your id is ${id}`;
// }
//
// greet3('vinod', 5);
//
// const emp = greet3('vinod', 5);
//
// console.log(emp)
//
//
// const fruits: string[] = ['apple', 'banana', 'orange', 'mango'];
//
// const newUpdateFruits = fruits.push('Kiwi');
//
// const lastData = fruits.pop();
//
// console.log(newUpdateFruits);
//
// console.log(lastData);
//
// fruits.forEach((f: string) => console.log(f))
//
// const numbers: number[] = [5, 7, 5, 4, 2, 7, 9, 6];
//
// const doubleData: number[] = numbers.map((curVal: number) => curVal * 2);
//
// console.log(doubleData);
//
// const numberToString = numbers.map((curElm: number) => curElm > 3);
//
// console.log(numberToString);
//
// const evenToString: number[] = numbers.filter((curElm: number): boolean => curElm % 2 === 0);
//
// console.log(evenToString);
//
// const numberGreaterThenTree: number[] = numbers.filter((curElm: number) => curElm > 3);
//
// console.log(numberGreaterThenTree);
//
//
// const person: {
//     name: string,
//     isStudent: boolean,
//     age: number,
//     address: { city: string; country: string }
// } = {
//     name: 'Arman',
//     isStudent: true,
//     age: 27,
//     address: {
//         city: 'Yerevan',
//         country: 'Armenia',
//     }
// }
//
// person.address.country = 'Georgia';
//
// console.log(person);
//
// type Product = {
//     name: string,
//     price: number,
//     quantity: number,
// }
//
// const product: Product = {
//     name: 'laptop',
//     price: 1000,
//     quantity: 5,
// }
//
// // const calculateTotalPrice = (product: Product) => {
// //     return `${product.name} total cost ${product.price * product.quantity}`
// // }
// //
// // console.log(calculateTotalPrice(product));
//
//
// type Student = {
//     name: string;
//     age: number;
//     gender?: string;
//     greet: (country: string) => string;
// }
//
// const student1: Student = {
//     name: 'Jack',
//     age: 29,
//     greet: ((country): string => `Welcome My name is ${student1.name}, I am ${student1.age}yrs old & I am from ${country}`)
// }
//
// const student2: Student = {
//     name: 'Jack',
//     age: 29,
//     greet: ((country): string => `Welcome My name is ${student2.name}, I am ${student2.age}yrs old & I am from ${country}`)
// }
//
//
// const introduction: (student1: Student) => string = (student1: Student): string => {
//     const {name, age} = student1
//     return `Welcome My name is ${name}, I am ${age}yrs old`
// }
//
// console.log(introduction(student1))
//
// enum Roles {
//     user = 'user',
//     admin = 'admin',
// }
//
// type LoginDetails = {
//     name?: string;
//     email: string;
//     password: string;
//     role: Roles
// }
//
// const user1: LoginDetails = {
//     name: 'test',
//     email: 'test@mail.com',
//     password: 'sscd4545',
//     role: Roles.admin,
// }
//
// const user2: LoginDetails = {
//     email: 'test2@mail.com',
//     password: 'sscd4545',
//     role: Roles.user,
// }
//
// const isAdmin: (user: LoginDetails) => string = (user: LoginDetails): string => {
//     const {name, email, role} = user;
//     return role === 'admin' ? `${email} is allow to edit the website` : `${email} allow to edit the website`
// }
//
// console.log(isAdmin(user1));
// console.log(isAdmin(user2));
//
//
// // const favCity: any[] = ['georgia', 'india', 'bangladesh', true, 'armenia', 55];
//
// type PersonInfo = [string, number, boolean];
//
// const displayPersonInfo: (person: PersonInfo) => void = (person: PersonInfo): void => {
//     const [name, age, hasDriverLicense] = person;
//     console.log(`Name ${name}, Age ${age}, Drivers License ${hasDriverLicense ? 'Yes' : 'No'}`)
// }
//
// const person1: PersonInfo = ['vinod', 29, true];
// const person2: PersonInfo = ['thn', 28, false];
//
// displayPersonInfo(person1)
// displayPersonInfo(person2)
//
//
// // const userInput: (value: string | number) => void = (value: string | number) => {
// //     if (typeof value === 'number') {
// //         return value * 2;
// //     } else if (typeof value === 'string') {
// //         return value.toUpperCase();
// //     } else {
// //         throw new Error('Invalid input data')
// //     }
// // }
// //
// //
// // console.log(userInput(10));
//
// function add<T, U>(a: T, b: U): void {
//     console.log(typeof a)
//     console.log(typeof b)
// }
//
// //
// // const result1: void = add<number, string>(a:5, b:'thampa');
// // const result2: void = add<string, boolean>(a:'Hello', b:true);
//
// interface Products {
//     name: string;
//     price: number;
//     quantity: number;
// }
//
// const product1: Products = {
//     name: 'test',
//     price: 1000,
//     quantity: 5,
// }
//
// const product2: Products = {
//     name: 'test1',
//     price: 1000000,
//     quantity: 10,
// }
//
// const calculateTotalPrice: (product: Products) => number = (product: Products): number => {
//     const {price, quantity} = product;
//     return price * quantity;
// }
//
// console.log(calculateTotalPrice(product1));
// console.log(calculateTotalPrice(product2));
// class Persons {
//     // public name: string;
//     // public age: number;
//     // private hobbies: string[];
//
//     constructor(
//         public name: string,
//         public age: number,
//         protected hobbies: string[]
//     ) {
//     }
//
//     introduceParent(): string {
//         return `Hi, Im ${this.name} and Im ${this.age} years old I love ${this.hobbies.join(', ')}.;`
//     }
//
//     // introduce(): string {
//     //     return `Hi, Im ${this.name} and Im ${this.age} years old I love ${this.hobbies.join(', ')}.;`
//     // }
//     introduce() {
//
//     }
// }
// class Students extends Persons {
//     constructor(
//         name: string,
//         age: number,
//         hobbies: string[],
//         public grade: number,
//     ) {
//         super(name, age, hobbies);
//     }
//
//     // introduce(): string {
//     //     return `Hi, Im ${this.name} and Im ${this.age} years old, I am in grade ${this.grade} I love ${this.hobbies.join(', ')}.;`
//     // }
//
//     introduce(): string[] {
//         return this.hobbies;
//     }
// }
// const person1: Persons = new Persons('Test1', 12, ['reading', 'painting']);
//
// const students1: Persons = new Students(
//     'Test3',
//     16,
//     ['reading', 'painting'],
//     15);
// console.log(person1.introduceParent())
// console.log(students1.introduce())
class Persons {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error('age is not valid');
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error('age is not valid');
        }
        return this._age;
    }
    introduceParent() {
        return `Hi, Im ${this.name} and Im ${this._age} years old, I love ${this.hobbies.join(',')}.`;
    }
}
const persons1 = new Persons('test', ['reading', 'painting']);
persons1.age = 12;
console.log(persons1.introduceParent());
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error('Invalid balance');
        }
        this._balance = newBalance;
    }
}
const account = new BankAccount();
account.balance = 10;
console.log(account.balance);
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newFah) {
        this._celsius = (newFah - 32 * 5) / 9;
    }
}
const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 177;
console.log(temp.celsius);
class MathOperations {
    static add(num1, num2) {
        return num1 + num2;
    }
    static subs(num1, num2) {
        return num1 - num2;
    }
}
MathOperations.PI = Math.PI;
console.log(MathOperations.PI);
console.log(MathOperations.add(5, 10));
console.log(MathOperations.subs(10, 5));
// interface PerObj {
//     name: string,
//     age: number,
// }
//
// const Person: PerObj = {
//     name: 'Test',
//     age: 28,
// }
// const Person1: PerObj = {
//     name: 'Test1',
//     age: 26,
// }
// const Person2: PerObj = {
//     name: 'Test2',
//     age: 25,
// }
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
        this.displayArea = () => {
            console.log(`This is a ${this.color} circle with radius ${this.radius}`);
        };
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle('red', 5);
console.log(circle.calculateArea());
circle.displayArea();
// type Stud = {
//     name: string;
//     age: number;
// }
//
// type StudAddr = {
//     city: string;
//     state: string;
// }
//
// const BioData: Stud | StudAddr = {
//     name: 'Test',
//     age: 28,
//     city: 'Yerevan',
//     state: 'AM',
// };
//
// console.log(BioData);
// interface Stud  {
//     name: string;
//     age: number;
// }
//
// interface StudAddr  {
//     city: string;
//     state: string;
// }
//
// interface Data extends Stud , StudAddr {}
//
// const BioData: Data = {
//     name: 'Test',
//     age: 93,
//     city: 'Yerevan',
//     state: 'AM',
// };
//
// console.log(BioData);
// interface Stud {
//     name: string;
//     age: number;
// }
//
// interface StudAddr {
//     city: string;
//     state: string;
// }
//
// interface Data extends Stud, StudAddr {
// }
//
// class BioData implements Data {
//     constructor(
//         public name: string,
//         public age: number,
//         public city: string,
//         public state: string,
//     ) {
//     }
// }
//
// const sdt1 = new BioData('Test1', 29, 'Lori', 'am');
//
// console.log(sdt1);
// const favHobbies: (hobby: string) => void = (hobby: string | string[]): void => {
//     if (typeof hobby === 'object' && Array.isArray(hobby)) {
//         return hobby.map((): void => {
//         })
//     } else {
//         console.log(hobby)
//     }
// }
//
// favHobbies('coding');
// favHobbies(['coding', 'games'])

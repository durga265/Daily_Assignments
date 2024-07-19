//Task1 - Copying Objects and Arrays

//1. Shallow Copy
let value = {
    a: 1,
    b: 2,
    c: {
        d: 4,
        e: 5
    }
}
// console.log(value)

let shallow = Object.assign({}, value);
let shallow2 = { ...value };

shallow.c.d = 10;
shallow2.c.e = 12;
console.log(shallow);
console.log(value);


//2.Deep Copy

const person = {
    name: "john",
    age: 23,
    company: {
        salary: "25k",
        role: "web developer"
    }
}
const copiedperson = JSON.parse(JSON.stringify(person))
console.log(person)
console.log(copiedperson)

copiedperson.salary = "50k";
copiedperson.role = "full stack developer";
console.log(copiedperson);
console.log(person);




//Task2 - Using Spread Operator

//1.Spread in Arrays

const spread1 = [1, 2, 3, 4, 5];
const spread2 = [6, 7, 8]
const merge = [...spread1, ...spread2];
console.log(merge);


//another way(array destructuring)
// const array1=[1,2,3];
// const expandarray=[...array1,4,5,6];
// console.log(expandarray);


// 2.Spread in Objects
const details = {
    name: 'sam',
    age: 23
}
const details2 = {
    location: 'banglore',
    company: 'IBM'
}
const combine = { ...details, ...details2 };
console.log(combine);

//Another way(array destructuring)
// const detailed={
//     name:'dev',
//     age:23
// }

// const newObj={...detailed,city:'telengana',company:'google'}
// console.log(newObj);





//Task3 - Using Rest Operator

//1. Rest in Functions
const sum = (...args) => {
    return args.reduce((acc, cur) => acc + cur, 0)
}
console.log(sum(1, 2, 5, 6));
console.log(sum(1, 2, 5, 6, 7, 9, 2, -6));

//2.Rest in Array Destructuring
const array = {
    name: 'john',
    age: 22,
    address: 'banglore'
}
const { name, age, ...rest } = array
console.log(name);
console.log(age);
console.log(rest);
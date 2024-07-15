//Task 1- Using setTimeout
setTimeout(() => {
    console.log("hello world!😀");
}, 3000);

//Task 2- Using setInterval
const tick = "tick";
const myInterval = setInterval(() => {
    console.log("Tick");
}, 2000);

//Task 3- Clear Interval
let i = 0;

const clear = setInterval(() => {
    if (i <= 5) {
        console.log("tick", i);
        i++;
    } else {
        clearInterval(myInterval);
    }
});


//Task4 - Simple Callback Function

// function greet(name,callback){
//     console.log('Hello '+name);
//     callback();
// }
// function sayGoodbye(){
//     console.log('bye');
// }
// greet('dev',sayGoodbye);


function greet(callback) {
    var name = prompt('enter user name');
    callback(name);
}
function processuserinput(name) {
    console.log('hello ' + name);
}
greet(processuserinput)

//Task 5 - Using Callbacks with Timing Functions
function print() {
    setTimeout(() => {
        console.log('hello');
        setTimeout(() => {
            console.log("world!");
        }, 2000);
    }, 1000);
}
print();


// Reflection Questions
// 1. What did you learn about JavaScript timing events and callbacks through this
// task?
// -->Through this task, I have learned how to use setTimeout() and setInterval() in JavaScript.
// -->and also how to use clearInterval() to stop a repeating mode until which interval we want.
// --> callback in JS callback is a function pass argument to another function.
// -->  and the purpose of callback is to be executed later after the completion of certain task.

//2. How do setTimeout and setInterval differ in their usage?
// setTimeout() and setInterval() are both methods in JS
// setTimeout()- it executes once after a 2-sec delay
// setInterval()- it will excute every milli second.

//3. What are the advantages of using callbacks in JavaScript?
//-->  The purpose of callback is to be executed later after the completion of certain task. and also managing the outcomes of asynchronous tasks without blocking the programs' execution.

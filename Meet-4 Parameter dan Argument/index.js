// //fungsi
// //1. Tanpa Input Parameter dan Output
// function greetings1() {
//     console.log("hello world");
// }

// //2.
// let greetings2 = function() {
//     console.log("hellow world");
// } 

// greetings1(); //call function


// Parameter dan Argument
// Dengan Input (Parameter dan Output(returt))
// 1. 
// function greetings1(fullName) {
//     return "hello" + fullName;
// }

// let output = greetings1("Cliefford")//argument
// console.log(output);
// //2. 
// let greetings2 = function (fullName) {
//     return "hello" + fullName;
// }

// let output2 = greetings2("Cliefford")
// console.log(output2);


//Global & Local Scope
let x = 10;//Global

function foo() {
    let y = 20;
    let z = 30;
    console.log(x);
    console.log(y);
    if (z > y) {
        let a = 40;//Block Scope
        console.log(a);
    }
}
foo()
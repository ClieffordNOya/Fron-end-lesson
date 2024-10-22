// //IIFE & Callback
// //1. IIFE ( Immediately Invoked Function Exoplorer )

// //No Params & Args & Return Value
// (function () {
//     console.log("Hello World")
// })();

// //Whit Params & Args & Return Value
// let output = (function (fullname){
//     console.log("Hello World" + (fullname));
// })("Jhone doe");
// console.log(output);


//callback function
//No Params & Args & Return Value
function sayHello(callback){
    callback()
    }

function greetings(){
    console.log("Hello callback fuction")
};
sayHello(greetings)

//White Parameter, Argument & Return Value
function sayHello(callback){
    let input = callback("Cliefford Noya")
    return output;
    }

sayHello(function(fullname){
    return "Hello" + fullname;
});
console.log(output)

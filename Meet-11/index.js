// // String Literals, Arrow Function & Default Parameter

// // 1. String literal
// let fullName = "Jon doe";
// let age = 33;
// let address = "Manado";

// // Jalo name saya Jon doe, umur saya 33 tahun dan saya tinggal di manado

// let kalimat = " Halo nama saya " + fullName + " Umur saya " + age + " dan saya tinggal di " + address + "."
// console.log(kalimat)

// let kalimat2 = `Hallo nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address}`
// console.log(kalimat2)

// // 2. Arrow function
// function sayGreetings(){
//     return `Hello ${fullName}`;
// }
// console.log(sayGreetings("Jon doe"));

// const sayGreetings2 = (fullName) => {
//     return `Hello ${fullName}`
// }
// console.log(sayGreetings2("Jon doe"))

// Implicit return value
// const sayGreetings2 = (fullName) `Hello ${fullName}`
// console.log(sayGreetings2("Jon doe"))

// IIFE
let output1 = (() => `Hello`)()
console.log(output1);

// Arrow function pada callback
let numbers = [1, 2, 3, 4, 5]
let output2 = numbers.map ((item) => item)
console.log(output2);

// Default parameter
const sayGreetings3 = (fullName) => {
    if (fullName == undefined) {
        fullName = "Clieff"
    } else if (age == undefined) {
        age = 20
    } else if (address == undefined) {
        address = "Manado"
    }
}
console.log(sayGreetings3)
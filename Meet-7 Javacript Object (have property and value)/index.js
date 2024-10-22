// //Javacript Object (have property and value)
// // let jhon = ["jhon", 30, true]
// //deklarasi object
// //cara 1. Object Literal
// let jhon = {
//     firstName: "jhon",
//     age: 30,
//     isMarried: true,
//     grade: [80, 90, 100],
//     sayGreetings: function(){
//         console.log("Hello my name is " + this.firstname)
//     },
//     address: {
//         street: "Jl. Arnold Mononutu",
//         city: "Minanhasa Utara",
//         province: "Sulawesi Utara",
//         postalCode: 95371,
//     }
// }
// console.log(jhon);

// //Cara keyword new
// let jane = new Object();
// jane.firstName = "jane",
// jane.age = 25,
// jane.isMarried = false

// console.log(jane);

// //Cara mengakses properti dalam object
// //1. Dot notaion
// console.log(jhon.firstname); //jhone
// console.log(jhon.age); //30
// jhon.age = 31;
// console.log(jhone.age); //31
// jhon.job = "Teacher";
// console.log(jhon);

// //2. Bracket notasion
// console.log(jhon["isMarried"]);
// jhon["natioanlty"] = "indonesia";
// console.log(jhon);

// //Object method
// jhon.sayGreetings();

// //Object inside boject
// console.log(jhon.address.city);

// //delete property
// delete jhon.grade;
// console.log(jhon);

//javascrip condition
//1. if - else
let numbers = 5;
if(numbers % 2 == 0) {
    console.log("Bilangan genap");
 } else {
        console.log("Bilangan ganjil");
}

//2. if - else - if

//100 - 80 nilai A
// 60 - 70 nilai B
// < 60 nilai c

let nilai = 80;
if (nilai >= 80 && nilai <= 100) {
    console.log("Grede A");
} else if (nilai >= 60 && nilai <= 70) {
    console.log("Grede B");
} else {
    console.log("Grede C");
}

//3. Switch - case
let month = 1;
switch(month) {
    case 1 : console.log("Bulan Januari");
    break
    case 2 : console.log("Bulan Februari");
    break
    case 3 : console.log("Bulan Maret");
    break
    default:
        console.log("not found");
        break
}
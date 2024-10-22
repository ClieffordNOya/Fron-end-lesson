// Menyimpan banyak data menggunakan array

//Array dan Object
//1.Array
// Deklarasi variable Array
//cara 1.Array Literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// //cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//Tipe data dalam array
// let numbers = [1, 2, 3, 4, 5,]; //Numbers
// let students = ["Budi", "Putri", "Dimas"]; //String
// let john = ["john", 30, true, (80, 90, 100)]; //Campuran
// console.log(john); 

//Array length
// console.log(numbers. length);
// console.log(students.length);
// console.log(john.length);

//Mengakses element tertentu dalam array
//Melalui index. Index sealalu dimulai dari 0
// console.log(numbers[2]); //3
// console.log(numbers[1]); //john
// console.log(john[3]); //80, 90, 100
// console.log(john[3][1]); //90

//Mengkases element terakhir dalam array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers[numbers.length-1]); 

//Array Method
let array = [1, 2, 3, "hallo", false, true];
console.log(array)

//1. toString
console.log(array.toString());

//2. join
console.log(array.join(" "));
console.log(array.join(" "));

//3. pop
array.pop();
console.log(array);

//4. push
array.push("selamat pagi");
console.log(array);

//5. shift
array.shift();
console.log(array);

//6. unshift
array.unshift("selamat pagi");
console.log(array);

//7. splice
array.splice(3, 8, 4, 5);
console.log(array);

//8. concat
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayem", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice
let sayuran = makanan.slice(3, 6);
console.log(sayuran);


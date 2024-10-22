// Kawonal, Avrilia Irena

// Contoh 
// 1. Desctructing (Array&Object)
// Array
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Object
const orang = {
    Name: 'Avrilia',
    umur: 20
};
const { Name, umur } = orang;

console.log(Name); // Avrilia
console.log(umur);  // 20

// No. 2 Desctructing dengan mengambil sebagian item (Array & Object)
// Array
const number = [1, 2, 3, 4];
const [number1, , number2] = number; 

console.log(number1); 
console.log(number2);

// Object 
const person = {
    firstName: 'Irena',
    lastName: 'Kawonal',
    age: 20
};
const { lastName, age } = person;
console.log(lastName); 
console.log(age);

// No.3  Desctruting dengan menggunakan default value ( array & object)
// Array 
const nmr = [1, 2];
const [nmr1, nmr2, nmr3 = 3] = nmr;

console.log(nmr1); 
console.log(nmr2); 
console.log(nmr3); 

// Object 
let siswa = {
    nam: "Frilly",
    umr: 20
};
let { nam, umr, kelas = "Tidak Diketahui" } = siswa; 

console.log(nam); 
console.log(umr); 
console.log(kelas); 

// No.4 
// Destructing dengan menggunakan rest operator ( Array & Object)
// Array 
const array = [1, 2, 3, 4, 5];
const [array1, array2, ...arraylainnya] = array;

console.log(array1);   
console.log(array2);    
console.log(arraylainnya);

// Object 
const manusia = {
    firstName: 'Piwi',
    lastName: 'Irena',
    age: 21,
    country: 'Indonesia'
};

const { firstName, ...lengkapnya } = manusia;

console.log(firstName);     
console.log(lengkapnya);   

// Exercise 7 
// Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.

// No.1 yang ada di exercise 6
const calculateAge = (birthYear) => 2019 - birthYear; 

const yearUntilRetirement = ({ year = 1980, firstName = "John Doe" } = {}) => { 
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName}, retires in ${retirement} years.`);
    } else {
        console.log(`Halo nama saya ${firstName}, saya sudah pensiun.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });


// No.2 yang ada di exercise 6
const addNumber = (...numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7)); // 28











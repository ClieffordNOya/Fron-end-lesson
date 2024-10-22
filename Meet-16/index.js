// //Asynchonous JS

// //sychronous  -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// //Asynchronous -> multi thread
// //1. Paralel
// setTimeout(() => {
//     console.log("Proses 1");
// }, 3000);
// console.log ("Proses 2");
// setTimeout(() => {
//     console.log("Proses 3");
// }, 3000);
// console.log("Prose 4");

// //2. Concurent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() =>{
//         console.log("Proses 2");
//         setTimeout(() =>{
//             console.log("Proses 3");
//             setTimeout(() =>{
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

// //3. Promise
// let condition = true
// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal")
//     }   
// });

// //Pakai Promise
// //1. then-catch
// newPromise
//     .then((result) => result)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error));

// //2. Async - await
// //Harus dibuat dalam fungsi

// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//       } catch (error) {
//         console.log(error);
//       }
// };

// consumePromise();

// //Pakai Proses yang sudah ada
// //1. fetch
// fetch("https://jsonplacehoder.typicode.com/users")
//     .then((respones) => respones.json())
//     .then((json) => console.log (json));

//     (async () => {
//         let response = await fatch("https://jsonplacehoder.typicode.com/users")
//         let json = await response.json();
//         json.forEach(({item}) => console.log(name));
//     })();

//2. Axios
axios
    .get("https://jsonplacehoder.typicode.com/users")
    .then((result) => console.log(result.data));

    (async () => {
        let result = await axios.get("https://jsonplacehoder.typicode.com/users")
        result.data.forEach(({name}) => console.log(name))
    })();


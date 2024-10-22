function hitungBMI(callback) {
    let output = callback(50, 1.7)
    console.log(output)
};

hitungBMI (function (berat, tinggi) {
    console.log("tinggi = ",berat,"kg")
    console.log("Berat = ",tinggi, "M")
    return bmi = berat/ (tinggi * tinggi)
});
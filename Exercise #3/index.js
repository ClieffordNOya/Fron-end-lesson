let people = {
    firstName: "Reyvan",
    lastName:"Kalangi",
    weight: 62,
    height: 1.70
  }
  console.log(people);
  
  function hitungBMI(weight, height) {
    let bmi = weight / (height * height);
  
    if (bmi < 16.0) {
      console.log(people.firstName + "is Severely Underweight");
    }
    else if (bmi >= 16.0 && bmi <= 18.4) {
      console.log(people.firstName + " is Underweight");
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log(people.firstName + " Weight is Normal");
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
      console.log(people.firstName + " is Overweight");
    }
    else if (bmi >= 30.0 && bmi <= 34.9) {
      console.log(people.firstName + " is Moderately Obese");
    }
    else if (bmi >= 35.0 && bmi <= 39.9) {
      console.log(people.firstName + " is Severely Obese");
    }
    else if (bmi >= 40.0) {
      console.log(people.firstName + "is Morbidly Obese");
    }
    else {
      console.log(people.firstName + "is Not defined");
    }
  
    return bmi;
  }
  
  
  let hasil = hitungBMI(people.weight, people.height);
  console.log(people.firstName + " BMI Value =", hasil);
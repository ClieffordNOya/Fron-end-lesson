// Ubahlah syntax ES5 berikut ke dalam ES6

// 1.
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({year, firstName}) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} year`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}

yearUntilRetirement({ year: 1987, firstName: 'John'});

// 2.
const addNumber = (a, b, c, d, e, f, g) => {
    var nubers = [a, b, c, d, e, f, g];
    var sum = 0;

    numbers.map((number) => {
        sum += number;
    });
    return sum;
};
console.log(addNumber(1,2,3,4,5,6,7));

// 3. 
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = ({radius, power}) => phi * Math.pow(radius, power);

radius = 21;
const area21 = calculareArea({radius, power});

radius = 7;
const area7 = calculateArea({radius, power});

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. 
const makeAjaxRequest = (url, method = `GET`) => {
    console.log(url, method);
};

makeAjaxRwquest(`www.google.com`);
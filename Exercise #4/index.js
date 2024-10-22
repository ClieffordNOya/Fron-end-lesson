let people = ["Greg", "Mary", "Devon", "James"];

//1
for(let i = 0; i < people.length; i++){
       console.log(people[i]);
}

//2
peopel.forEach(function (item){
   console.log(item);

})

//3
people.shift();
console.log(people);

//4
people.pop();
console.log(people);

//5
people.unshift("Budi");
console.log(people);

//6
people.push("Matt");
console.log(people);

//7
for(let i = 0; i < people.length; i++){
   console.log(people[i]);
   if (peoplep[i] == "Marry")
   break
}

//8
let cPeople = people.slice(2, 4);
console.log(cPeople);

//9
people.splice(2, 1, "Elisabeth", "Artie");
console.log(people);

//10
let withBob = ["Matt", "Mary", "Elisabeth", "Artie", "Clief"];
let finalPeople = people.concat("Bob")
console.log(finalPeople);

// Object Exercise

let programming = {
   languages: ["JavaScript", "Python", "Ruby"],
   isChallenging: true,
   isRewarding: true,
   difficulty: 8,
   jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
 };
 
 //1. 
 programming.languages.push("Go");
 console.log(programming.languages);
 
 //2. 
 programming["difficulty"] = 7;
 console.log(programming);
 
 //3. 
 
 delete programming.jokes;
 console.log(programming);
 
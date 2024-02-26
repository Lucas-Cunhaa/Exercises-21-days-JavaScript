const myName = prompt(" Name");
const age = Number(prompt(" Age "));
const myWeight = Number(prompt(" Weight "));
const height = Number(prompt(" height "));
const work = prompt(" Work ");
const nome = prompt(" Name ");
const imc = myWeight / (height * height);
let canDrink = " ";
const year = age;
const months = year * 12 + 6;
const days = months * 7 * 4;
let resultImc = "";
const cases = ["Underweight", "Normal", "Overweight", "Obesity"];

switch (true) {
  case imc < 18.5:
    resultImc = cases[0];
    break;
  case imc >= 18.4 && imc <= 24.9:
    resultImc = cases[1];
    break;
  case imc >= 24.9 && imc < 30:
    resultImc = cases[2];
    break;
  case imc >= 30:
    resultImc = cases[3];
    break;
  default:
    resultImc = "Invalid IMC";
    break;
}

if (age >= 18) {
  canDrink = "Let's have a bear";
} else {
  canDrink = "I'm sorry, we can't have a bear";
}

console.log(`Hello! ${myName} you are ${age}, a ${work} , ${height} tall, and weight ${myWeight}Kg, ${canDrink}. You have ${year} years, ${months} months, and ${days} days of existense 
your IMC is ${imc}, and the result is ${resultImc}`);

for (let i = 0; i <= age; i++) {
    console.log(`${2023 - age + i} - ${i} years`);
  }
  
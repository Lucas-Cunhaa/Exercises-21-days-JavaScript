let models = []; 
let values = []; 
let year = []; 
let counter = 0;
let cheapCar = 0;
let media = 0;
let sum = 0;
let cheapestCarIndex = 0 
let mostValue = 0;

while(counter < 3){
    models.push(prompt('models'))
    values.push(Number(prompt('values')))
    year.push(Number(prompt('year')))
    counter++
}

cheapCar += values[0];

for (let i = 0; i < values.length; i++) {
    if(cheapCar > values[i]){
        cheapCar = values[i]
        cheapestCarIndex = i;
    }
}

for (let i = 0; i < values.length; i++) {
    sum += values[i]
}

media = sum / values.length
if (cheapestCarIndex !== -1) 

{
    console.log("O carro mais barato é:", models[cheapestCarIndex]);
    console.log("Ano:", year[cheapestCarIndex]);
    console.log("Preço:", cheapCar);
    console.log(models, year)
}   



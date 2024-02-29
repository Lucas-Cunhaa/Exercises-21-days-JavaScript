let model = [];
let years = [];
let value = [];
let indices = [];
let question = '';

do{
    model.push(prompt('Model'));
    years.push(Number(prompt('Year')));
    value.push(Number(prompt('Value')));

    question = prompt('Continue? Yes/No');


}while( question.toLowerCase() === 'yes' )
let maxIndex = 0;

for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length - 1 - i; j++) {
        if (value[j] > value[j + 1]) {
            const save = value[j];
            const saveCar = model[j];
            const saveYear = years[j];

            model[j] = model[j+1];
            model[j+1] = saveCar;

            years[j] = years[j+1];
            years[j+1] = saveYear
            value[j] = value[j + 1];
            value[j + 1] = save;
        }
    }
}

console.log(model, years, value)



let valid;
let wage;
let confirm;
let year = 2024;
do{
    let myName = prompt( "Name" );
    let age = Number(prompt( "Age" ));
     wage = Number(prompt( "Wage" ));
    confirm = prompt( "Confirme your informations Yes/No" );
}while(confirm.toLowerCase() === "no")

for(let i = 0; i <= 10; i++){
    let provision = wage * ( 1.15 ** i)
    console.log(` In ${year + i} your wage will be ${provision}`)
}
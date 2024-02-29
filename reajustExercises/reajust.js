
function informations(yourName, wage){
   
    upWage(wage)
    function upWage(wage){
        if(wage <= 1500){
            wage = wage* 1.2;
        } else if( wage > 1500 && wage <= 2000){
            wage = wage * 1.15;
        } else if( wage > 2000 && wage <= 3000){
            wage = wage * 1.1;
        } else{
            wage = wage * 1.05;
        }
         return wage;
    };
    alert(` Mr(s), ${yourName}, your future wage it will be ${upWage(wage)} `);

}
informations( prompt('Whats Your Name?'), Number(prompt('WHATS YOUR WAGE?')))
 
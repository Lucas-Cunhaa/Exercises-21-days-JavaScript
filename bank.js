
let history = []
let balance = 1200
let go = 0
do {
    
    let option = prompt('Withdraw or Deposit:').toLowerCase();
    let valor = Number(prompt('Type the Valor:'));
    history.push( { type: option, amount: valor } );
    let amounts = history.map(transaction => transaction.amount);
    let maxAmount = Math.max(...amounts);
     go = Number(prompt('Continue?\n1 - Continue\n2 - Stop'));
    
    if( valor > 0){
    if (option.toLocaleLowerCase() === 'withdraw') {
        if (valor <= balance) {
            balance -= valor;
        } else {
            console.log( 'Insufficient funds for withdrawal.' );
        }
    } else if (option.toLocaleLowerCase() === 'deposit') {
        balance += valor;
    } else {
        console.log( 'Invalid option.' );
    }
    console.log( 'Current Balance:', balance );
   
    console.log(history);
    console.log(maxAmount);

    };
    


} while (go === 1);


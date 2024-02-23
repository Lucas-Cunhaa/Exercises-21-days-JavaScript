

let balance = 1200
let go = 0
do {
   
    let option = prompt('Withdraw or Deposit:').toLowerCase();
    let valor = Number(prompt('Type the Valor:'));
     go = Number(prompt('Continue?\n1 - Continue\n2 - Stop'));

    if (option === 'withdraw') {
        if (valor <= balance) {
            balance -= valor;
        } else {
            console.log( 'Insufficient funds for withdrawal.' );
        }
    } else if (option === 'deposit') {
        balance += valor;
    } else {
        console.log( 'Invalid option.' );
    }
    console.log( 'Current Balance:', balance );

} while (go === 1);


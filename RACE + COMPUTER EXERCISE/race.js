class car {
    Name 
    Potential 
    MaxVelocity 
    Aceleration 
    constructor(name, potential , maxVelocity, aceleration){
        this.Name = name
        this.Potential = potential 
        this.MaxVelocity = maxVelocity
        this.Aceleration = aceleration 
    }
    result(distance){
        let result =  distance /(this.Aceleration/this.MaxVelocity)
        return result;
    }
}

class race{
    Name 
    Type 
    Distance 
    Pilots 
    Winner 

    constructor(name, type, distance ){
       
        this.Name = name
        this.Type = type
        this.Distance = distance
        this.Pilots = []
        this.Winner =  ''
    }

    verifyWinner() {
        
        let winnerIndex = 0;
        for (let i = 1; i < this.Pilots.length; i++) {
            if (this.Pilots[i].result(this.Distance) < this.Pilots[winnerIndex].result(this.Distance)) {
                winnerIndex = i;
            }
        }
       this.Winner = this.Pilots[winnerIndex]
    }

    showTheWinner(){
        alert("The Winner is " +  this.Winner.Name)
    }
}

let race1 = new race('Corrida de Guarabira', 'A pé', 2000)

for(let i = 0; i < 10; i++){
    race1.Pilots[i] = new car(`BMWX${i+1}`, 625 , 390 + i,  i+10)
}



race1.verifyWinner()
race1.showTheWinner()
console.log(race1.Winner)


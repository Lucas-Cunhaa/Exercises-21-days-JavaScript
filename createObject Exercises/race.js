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

bmwX6 = new car("BMW X6", 625, 80.5, 8)
bmwX1 = new car("BMW X6", 625, 80.5, 1)
bmwX2 = new car("BMW X6", 625, 80.5, 5)
bmwX3 = new car("BMW X6", 625, 80.5, 4)
bmwX4 = new car("BMW X6", 625, 80.5, 3)
bmwX5 = new car("BMW X6", 625, 80.5, 2)

let times = [bmwX1.result(1200),bmwX2.result(1200),bmwX3.result(1200),bmwX4.result(1200),bmwX5.result(1200),bmwX6.result(1200)];
let cars = [bmwX1,bmwX2,bmwX3,bmwX4,bmwX5,bmwX6]

class race{
    Name 
    Type 
    Distance 
    Pilots 
    Winner 

    constructor(name, type, distance, pilots){
       
        this.Name = name
        this.Type = type
        this.Distance = distance 
        this.Pilots = pilots
        this.Winner = ""

    }

    verifyWinner() {
        let winnerIndex = 0;
        for (let i = 1; i < this.Pilots.length; i++) {
            if (this.Pilots[i] < this.Pilots[winnerIndex]) {
                winnerIndex = i;
            }
        }
        return cars[winnerIndex];
    }
}


let race1 = new race("f1", "circle", 1000, times )
console.log(race1.verifyWinner())
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

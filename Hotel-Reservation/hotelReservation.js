class Hotel {
    Id 
    Name 
    Category 
    Adress 
    Phone 
    constructor(id,name,category,adress,phone){
        this.Id = id
        this.Name = name
        this.Category = category
        this.Adress = adress
        this.Phone = phone 
    }
}
class Reserv {
    Id
    IdHotel 
    Person 
    EntryDay 
    LeftDay

    constructor(id,idHotel, person,entryDay,leftDay){
        this.Id = id
        this.IdHotel = idHotel
        this.Person = person 
        this.EntryDay = entryDay 
        this.LeftDay = leftDay
    }
}
let hotels = [];
let reservations = [];

function register(){
    let hotel = new Hotel(455, "Victors", "Hotel", "Av. Dom Pedro 2", 83998822014);
    hotels.push(hotel);
    let reserve = new Reserv(390, hotel.Id, "Lucas" , "19/03/2024", "21/03/2024");
    reservations.push(reserve);

} register();

function showReserv(id){
    let hotelName;
    hotels.forEach(hotel => {
        if(hotel.Id === id){
         hotelName = hotel.Name
        };
       });
   reservations.forEach(reservation => {
    if(reservation.IdHotel === id){
        alert(`Hello Mrs.${reservation.Person}, your reservation in ${hotelName} at ${reservation.EntryDay} until ${reservation.LeftDay} it's done`)
    };
   });
} showReserv(hotels[0].Id);

function showHotel(id){
    let dayEntry;
    let dayOff;
    let idHotel;
    reservations.forEach(reservation => {
        if(reservation.Id === id){
           dayEntry = reservation.EntryDay;
           dayOff = reservation.LeftDay;
           idHotel = reservation.IdHotel;
        };
       });
    hotels.forEach(hotel => {
        if(hotel.Id === idHotel){
         alert(`In ${hotel.Name}, localizade in ${hotel.Adress}, your reservation is scheduled for ${dayEntry} until ${dayOff}`)
        };
       });
}showHotel(390)


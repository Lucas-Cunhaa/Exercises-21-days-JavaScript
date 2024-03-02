class Hotel {
  Id;
  Name;
  Category;
  Adress;
  Phone;
  constructor(id, name, category, adress, phone) {
    this.Id = id;
    this.Name = name;
    this.Category = category;
    this.Adress = adress;
    this.Phone = phone;
  }
}
class Reserv {
  Id;
  IdHotel;
  Person;
  EntryDay;
  LeftDay;

  constructor(id, idHotel, person, entryDay, leftDay) {
    this.Id = id;
    this.IdHotel = idHotel;
    this.Person = person;
    this.EntryDay = entryDay;
    this.LeftDay = leftDay;
  }
}

let hotels = [];
let reservations = [];

function registerHotel() {
  let question = false;
  do {
    let id = Number(prompt("Enter the Hotel Id"));
    let name = prompt("Enter the Hotel Name");
    let category = prompt("Enter the Category");
    let adress = prompt("Enter the Adress");
    let phone = Number("Enter the Phone");
    let hotel = new Hotel(id, name, category, adress, phone);
    hotels.push(hotel);
    let makeAnother = prompt("Want to Register another Hotel? YES/NO");
    if (makeAnother.toLowerCase() === "NO") question = false;
  } while (question);
}
registerHotel();

function registerReservation() {
  question = false;
  do {
    let idHotel = Number(
      prompt("Enter the ID of the hotel where the reservation will be made")
    );
    hotels.forEach((hotel) => {
      if (hotel.Id === idHotel) {
        let person = prompt("Enter the person responsible for the reservation");
        let dayOfEntry = prompt("Enter the check-in day");
        let dayOfLeft = prompt("Enter the departure day");
        let id = Math.floor(Math.random() * 100) + 1;
        let reservation = new Reserv(
          id,
          idHotel,
          person,
          dayOfEntry,
          dayOfLeft
        );
        reservations.push(reservation);
      } else {
        alert("Hotel hotel not found");
      }
      let ask = prompt("Whant to make another Reservation? YES/NO");
      if (ask.toLocaleLowerCase === "yes") question = true;
    });
  } while (question);
} registerReservation();


function showByIdReserv(id) {
  let hotelName;
  hotels.forEach((hotel) => {
    if (hotel.Id === id) {
      hotelName = hotel.Name;
    }
  });
  reservations.forEach((reservation) => {
    if (reservation.IdHotel === id) {
      alert(
        `Hello Mrs.${reservation.Person}, your reservation in ${hotelName} at ${reservation.EntryDay} until ${reservation.LeftDay} it's done`
      );
    }
  });
}



function showByIdHotel(id) {
  let dayEntry;
  let dayOff;
  let idHotel;
  reservations.forEach((reservation) => {
    if (reservation.Id === id) {
      dayEntry = reservation.EntryDay;
      dayOff = reservation.LeftDay;
      idHotel = reservation.IdHotel;
    }
  });
  hotels.forEach((hotel) => {
    if (hotel.Id === idHotel) {
      alert(
        `In ${hotel.Name}, localizade in ${hotel.Adress}, your reservation is scheduled for ${dayEntry} until ${dayOff}`
      );
    }
  });
}


function showByPerson(person) {
  let index = [];
  reservations.forEach((reservation, i) => {
    if (reservation.Person === person) {
      index.push(i);
    }
  });
  for (let i = 0; i < index.length; i++) {
    console.log(reservations[index[i]]);
  }
}
showByPerson("Lucas");

function showByCategory(category) {
  let index = [];
  let hotelsCategoy = [];
  hotels.forEach((hotel, i) => {
    if (hotel.Category === category) {
      index.push(i);
    }
  });
  for (let i = 0; i < index.length; i++) {
    hotelsCategoy.push(hotels[index[i]].Name);
  }
}
showByCategory("Hotel");

function showById(id, phone) {
  hotels.forEach((hotel) => {
    if (hotel.Id === id) {
      hotel.Phone = phone;
      console.log(hotel);
    }
  });
}
showById();

let search = prompt("Want to search By? Reserv Id / Hotel Id / Person / Hotel Category ")

switch(search.toLowerCase()){
    case "reserv id":
        let reservId = Number(Prompt('Enter the Reserv Id for search'))
        showByIdReserv(reservId);
        break;
    case "hotel id":
        let hotelId = Number(Prompt('Enter the Hotel Id for search'));
        showByIdHotel(hotelId);
        break;
    case "person":
        let person = Prompt('Enter Person for search');
        showByPerson(person);
        break;
    case "hotel category":
        let hotelCategory = Prompt('Enter Category for search');
        showByCategory(hotelCategory);
        break;
    default:
        alert('Invalid Option Entered');
        break;
}

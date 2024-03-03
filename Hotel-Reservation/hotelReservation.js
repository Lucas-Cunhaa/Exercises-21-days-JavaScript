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
  let question =  true;
  let idFound = false;
  do {
    let id = Number(prompt("Enter the Hotel Id"));
    let name = prompt("Enter the Hotel Name");
    let category = prompt("Enter the Category");
    let adress = prompt("Enter the Adress");
    let phone = Number(prompt("Enter the Phone"));
    let hotel = new Hotel(id, name, category, adress, phone);
    hotels.push(hotel);
    let makeAnother = prompt("Want to Register another Hotel? YES/NO");
    if (makeAnother.toLowerCase() === "no") question = false;
  } while (question);
}
registerHotel();

function registerReservation() {
  let question = true;
  let idFound = false;
  do {
    let idHotel = Number(
      prompt("Enter the ID of the hotel where the reservation will be made")
    );
    hotels.forEach((hotel) => {
      if (hotel.Id === idHotel) {
        let person = prompt("Enter the person responsible for the reservation");
        let dayOfEntry = prompt("Enter the check-in day");
        let dayOfLeft = prompt("Enter the departure day");
        let id = Number(prompt("Enter any Id for Reserv"))
        let reservation = new Reserv(
          id,
          idHotel,
          person,
          dayOfEntry,
          dayOfLeft
        );
        
        reservations.push(reservation);
        idFound = true;
        let ask = prompt("Want to make another Reservation? YES/NO");
        if (ask.toLowerCase() === "no") question = false;
      }
    });
  } while (question);
  
  if(!idFound) {
    alert('Invalid ID');
  }
} 

registerReservation();



function showByIdReserv(id) {
  let hotelName;
  let foundIdReserv = false;
  hotels.forEach((hotel) => {
    if (hotel.Id === id) {
      hotelName = hotel.Name;
      foundIdReserv = true;
    }
  });
  if(!foundIdReserv){alert('Invalid Id')}
  reservations.forEach((reservation) => {
    if (reservation.IdHotel === id) {
      alert(
        `Hello Mrs.${reservation.Person}, your reservation in ${hotelName} at ${reservation.EntryDay} until ${reservation.LeftDay} it's done`
      );
    }
  });
}



function showByIdHotel(id) {
  let entryDay;
  let leftDay;
  let idHotel;
  let hotelFound = false;
  reservations.forEach((reservation) => {
    if (reservation.Id === id) {
      entryDay = reservation.EntryDay;
      leftDay = reservation.LeftDay;
      idHotel = reservation.IdHotel;
      hotelFound = true;
    }
    });
  hotels.forEach((hotel) => {
    if (hotel.Id === idHotel) {
      alert(`In ${hotel.Name}, localizade in ${hotel.Adress},
      your reservation is scheduled for ${entryDay} until ${leftDay}`);
    }
});

  if(!hotelFound){ alert('Invalid Hotel') }
}


function showByPerson(person) {
  let index = [];
  let personFound = false; 
  reservations.forEach((reservation, i) => {
    if (reservation.Person === person) {
      index.push(i);
      personFound = true; 
    }
  });

  if (!personFound) {
    alert('Invalid person');
  } else {

    for (let i = 0; i < index.length; i++) {
      console.log((reservations[index[i]]));
    }
  }
}


function showByCategory(category) {
  let index = [];
  let hotelsCategory = [];
  let categoryFound = false;

  hotels.forEach((hotel, i) => {
    if (hotel.Category === category) {
      index.push(i);
      categoryFound = true;
    }
    
});
 if(!categoryFound){alert('Invalid Ctegory')}

  for (let i = 0; i < index.length; i++) {
    hotelsCategory.push(hotels[index[i]].Name);
  }
  alert(hotelsCategory.join(", "));
} 


function addNewPhone(id, phone) {
  hotels.forEach((hotel) => {
    if (hotel.Id === id) {
      hotel.Phone = phone;
      console.log(hotel);
    }
  });
}


let search = prompt("Want to search By? Id-R / I-dH / Person / Hotel-Category / Phone")

switch(search.toLowerCase()){
    case "id-r":
        let reservId = Number(prompt('Enter the Reserv Id for search'))
        showByIdReserv(reservId);
        break;
    case "id-h":
        let hotelId = Number(prompt('Enter the Hotel Id for search'));
        showByIdHotel(hotelId);
        break;
    case "person":
        let person = prompt('Enter Person for search');
        showByPerson(person);
        break;
    case "hotel-category":
        let hotelCategory = prompt('Enter Category for search');
        showByCategory(hotelCategory);
        break;
    case "phone":
      let phone = Number(prompt('Enter your phone for actualize'));
      let id = Number(prompt('Enter the hotel id'))
      addNewPhone(id, phone)
      break;
    default:
        alert('Invalid Option Entered');
        break;
}

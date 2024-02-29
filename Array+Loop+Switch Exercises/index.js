let password = [];
let names = [];
let cont = true;
do {
  let option = prompt("SELECT A OPTION REGIRSTER/LOGIN/DELETE or END");

  switch (option) {
    case "register":
      names.push(prompt("TYPE YOUR USER NAME"));
      password.push(prompt("TYPE YOUR PASSWORD"));

    case "login":
      let name = prompt("TYPE YOUR USER NAME");
      let pass = prompt("TYPE YOUR PASSWORD");
      if (name === names[0] && pass === password[0]) {
        alert("Sucefully Login");
      } else if (name === names[0] && pass != password[0]) {
        alert("Incorrect Password");
      } else if (name != names[0] && pass === password[0]) {
        alert("Incorrect Login");
      } else {
        alert("Incorrect Login and Password");
      }

      break;

    case "delete":
      password = [];
      names = [];
      cont = false;
      break;

    case "end":
      cont = false;
      break;

    default:
      alert("INVALID OPTION");
      cont = false;
      break;
  }
  console.log(option);
} while (cont);

console.log(password);
console.log(names);

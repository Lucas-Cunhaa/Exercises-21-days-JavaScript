let username = [];
let password = [];
let option = true;

function selection() {
  let userOption = prompt("Chose your action REGISTER / LOGIN / DELETE/ END");
  return userOption.toLowerCase();
}

function registering() {
  username.push(prompt("Type your USERNAME"));
  password.push(prompt("Type your PASSWORD"));
}

function loggin() {
  let name = prompt("Type your USERNAME");
  let pass = prompt("Type your PASSWORD");
    if (username.includes(name) && password.includes(pass)) {
        return true;
  }
  return false;
}

function deleter(name) {
  if (username.includes(name)) {
    let nameIndex = username.indexOf(name);
    username.splice(nameIndex, 1);
    password.splice(nameIndex, 1);
  }
}
do{
switch (selection()) {
  case "register":
    registering();
    break;
  case "login":
    if (username.length != 0) {
        loggin();
        if (loggin) {
            alert("Login Well Sucefully");
            } else {
            alert("Username or Password Incorrects");
            }
    } else {
      alert("You need to register first");
      registering();
    }
    break;
  case "delete":
    deleter(prompt("Which Username?"));
    break;
  case "end":
    option = false;
    break;
  default:
    alert("Invalid Option");
    selection();
    break;
}

}while(option)

console.log(username, password)
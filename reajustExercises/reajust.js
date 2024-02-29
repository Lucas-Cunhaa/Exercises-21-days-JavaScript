function informations(yourName, wage) {
  upWage(wage);
  function upWage(wage) {
    let up = "";
    if (wage <= 1500) {
      up = "20%";
      wage = wage * 1.2;
    } else if (wage > 1500 && wage <= 2000) {
      up = "15";
      wage = wage * 1.15;
    } else if (wage > 2000 && wage <= 3000) {
      up = "10%";
      wage = wage * 1.1;
    } else {
      up = "5%";
      wage = wage * 1.05;
    }
    return wage + " a increase of " + up;
  }
  function repete(again) {
    if (again.toLowerCase() === "no") {
      return;
    } else {
      informations(
        prompt("Whats Your Name?"),
        Number(prompt("WHAT'S YOUR WAGE?"))
      );
    }
  }

  alert(` Mr(s), ${yourName}, your future wage it will be ${upWage(wage)} `);
  repete(prompt("Whant to Repete?"));
}
informations(prompt("Whats Your Name?"), Number(prompt("WHATS YOUR WAGE?")));

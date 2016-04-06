var arrName = [];

for (i = 0; i < 5; i++){
  arrName.push(prompt ('Enter your name, please.'));
}

console.log(arrName);

var userName;
userName = prompt('Enter your user name, please');


if (userName == arrName[0]) {
  alert("Welcome, " + userName + "!");
} else if (userName == arrName[1]) {
  alert("Welcome, " + userName + "!");
} else if (userName == arrName[2]) {
  alert("Welcome, " + userName + "!");
} else if (userName == arrName[3]) {
  alert("Welcome, " + userName + "!");
} else if (userName == arrName[4]) {
  alert("Welcome, " + userName + "!");
} else {
  alert("Incorrect login!");
}

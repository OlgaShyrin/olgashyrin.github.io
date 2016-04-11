var arrName = [];
var usersNum = 5;

for (i = 0; i < usersNum; i++){
  arrName.push(prompt ('Enter your name, please.'));
}

console.log(arrName);

var userName;
userName = prompt('Enter your user name, please');

var isNameCorrect = false;

for (i = 0; i < usersNum; i++) {
  if (userName == arrName[i]) {
    isNameCorrect = true;
    break;
  }
}

if (isNameCorrect === true) {
  console.log("Welcome, " + userName + "!");
} else {
  console.log("There is no user with name: " + userName);
}

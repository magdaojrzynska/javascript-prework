function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

function buttonClicked(argButtonName, buttonRock, buttonPaper, buttonScissors) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2' ) {
  computerMove = 'papier';
} else if (randomNumber == '3') {
    computerMove = 'nozyce'
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nozyce';
} else {playerMove = 'nieznany ruch'} 
printMessage('Twój ruch: ' + playerMove);


var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nozyce';
  }  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyczki') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nozyczki' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } 
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


playerMove = argButtonName
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = argButtonName
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);


buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik KAMIEŃ'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik PAPIER'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik NOZYCZKI'); });

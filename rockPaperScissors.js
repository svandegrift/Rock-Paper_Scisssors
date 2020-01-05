const getUserChoice = userInput => {  
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error!')
  }
}
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return "It's a tie!";
  }else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }else if(userChoice === "paper"){
    if(computerChoice === "scissors"){
      return "The computer won!";
    }else{
      return "You won!";
    }
  }else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return "The computer won!";
    }else{
      return "You won!";
    }
  }else if(userChoice === 'bomb'){
    return "You obliterated him! You won!";
  }
}
function playGame(){
  let userChoice = getUserChoice("");
  let computerChoice = getComputerChoice();
  console.log(`User: ${userChoice} | Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
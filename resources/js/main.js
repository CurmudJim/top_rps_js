const body = document.querySelector('body');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const btnGroup = document.querySelector('.btn-group');

function computerPlay() {
  var play = ['Rock','Paper','Scissor'];
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var play = ['Rock','Paper','Scissor'];
  return play[getRandomInt(3)];
}
function playRound(player1,player2) {
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();
  if (player1 == player2) {
    return "It's a draw.";
  } else if (player1.startsWith("r") === true) {
    if (player2.startsWith("s") === true) {
      return "Rock beats Scissors.";
    } else {
      return "Paper beats Rock.";
    }
  } else if (player1.startsWith("p") === true) {
    if (player2.startsWith("r") === true) {
      return "Paper beats Rock.";
    } else {
      return "Scissors beat Paper.";
    }
  } else {
    if (player2.startsWith("p") === true) {
      return "Scissors beats Paper.";
    } else {
      return "Rock beats Scissors.";
    }
  }
}

// we use the .forEach method to iterate through each button
const buttons = document.querySelectorAll('button');
var win = 0
var loss = 0
var color = ""
var result = ""



buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {

    function game() {
      const playerSelection = button.id;
      const computerSelection = computerPlay();
      const round = playRound(playerSelection,computerSelection)
      document.getElementById("round").innerHTML = round;
      if (!round.toLowerCase().startsWith("i")) {
        if (round.toLowerCase().startsWith(playerSelection.charAt(0)) === true) {
          win += 1
          document.getElementById("win").innerHTML = win;
          color = "#4ea76a"
          result = "Point goes to you!"
        } else {
          loss += 1
          document.getElementById("loss").innerHTML = loss;
          color = "#ce636f"
          result = "Point goes to the computer."
        }
      } else {
        color = "slategray"
        result = ""
      }
      if (win == 5) {
        result = "You Won!"
      } else if (loss == 5) {
        result = "You Lost!"
      }
      body.setAttribute('style', `background: ${color}`);
      document.getElementById("result").innerHTML = result;
      if (win == 5 || loss == 5) {
        cardBody.removeChild(btnGroup);
        const newGameButton = document.createElement('button');
        newGameButton.classList.add('btn','btn-secondary', 'btn-lg');
        newGameButton.textContent = "New Game"
        cardBody.appendChild(newGameButton);
        newGameButton.onclick = () => location.reload();
      }
    }

    while (win < 5 && loss < 5) {
      return game();
    }

  });
});

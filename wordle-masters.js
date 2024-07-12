const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');
const ANSWER_LENGTH = 5;

async function init() {
  let currentGuess = '';
  let currentRow = 0;  

  // fetching the word of the day
  const res = await fetch('https://words.dev-apis.com/word-of-the-day');
  const resObj = await res.json();
  const word = resObj.word.toUpperCase();
  setLoading(false);
  
  console.log(word);
  function addLetter (letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      // add letter to the end
      currentGuess += letter;
    } else {
      // replace the last letter
      currentGuess = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    
    letters[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText = letter;
  }
  
  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
        // do nothing
        return;
    }

    // TODO validate the word

    //  TODO do all the marking as "correct" or "wrong"

    //TODO did they win or not

    currentRow++;
    currentGuess = '';

  }

  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = '';
  }
  
  document.addEventListener('keydown', function handleKeyPress(event) {
    const action = event.key;
    
    if (action === 'Enter') {
      commit();
    } else if (action === 'Backspace') {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase())
    } else {
      // do nothing
    }
  });
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading) {
  loadingDiv.classList.toggle('show', isLoading);
}
init();
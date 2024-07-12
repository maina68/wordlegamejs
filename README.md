# wordlegamejs
Recreation of the well known word game Wordle. If you're not familiar with Wordle (which we'll call Word Masters), here's how you play:
  There is a secret five letter word chosen
  Players have six guesses to figure out the secret word. After six guesses, they lose
  If the player guesses a letter that is in the right place, it is shown as green
  If the player guesses a letter that is in the word but not in the right place, it is shown as yellow
  It does account for however many of the letter exist in the word. For example, if the player guesses "SPOOL" and the word is "OVERT", one "O" is shown as yellow and the second one is not.
If the player guesses the right word, the player wins and the game is over.
Feel free to try (you may need to click on it.): https://wordlegamejs.netlify.app/

You need to call an API to get the secret word. Frontend Masters has created one that you can call here:

The API
There are two APIs to work with:

GET https://words.dev-apis.com/word-of-the-day

This will give you the word of the day. It changes every night at midnight
The response will look like this: {"word":"humph","puzzleNumber":3} where the word is the current word of the day and the puzzleNumber is which puzzle of the day it is
If you add random=1 to the end of your URL (words.dev-apis.com/wordof-the-day/get-word-of-the-day?random=1) then it will give you a random word of the day, not just the same daily one.
If you add puzzle=<number> to the end of your URL (words.dev-apis.com/wordof-the-day/get-word-of-the-day?puzzle=1337) then it will give you the same word every time.
Please note the words are chosen at total random. No meaning is meant by the words; they're just random words for a word puzzle.

POST https://words.dev-apis.com/validate-word

You must POST to this endpoint, not GET.
The endpoint expects JSON with a property called "word". A valid post body would be { "word": "crane" }.
The API will return back to you the word you sent and validWord which will be true or false. e.g. { "word": "crane", "validWord": true } or { "word": "asdfg", "validWord": false }.
This endpoint only validates five letter words.
This endpoint only validates English words and will not validate any accents or non-letter characters

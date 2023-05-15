import React from "react";

function GuessInput({submitGuess, gameStatus}) {

  const [guess, setGuess] = React.useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('guess: ', guess);
    submitGuess(guess);
    setGuess('');
  }

  return (
    <form onSubmit={submitHandler} className="guess-input-wrapper">
      <label labelfor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        value={guess}
        disabled={gameStatus !== 'playing'}
        minLength={5}
        maxLength={5}
        onChange={e => setGuess(e.target.value.toUpperCase())} />
    </form>
    );
}

export default GuessInput;

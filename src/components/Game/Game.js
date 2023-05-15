import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');


  const submitGuess = (guess) => {
    const newArray = [...guesses, guess];
    setGuesses(newArray);
    if(newArray.includes(answer)) setGameStatus('gameWon');
    else if(newArray.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus('gameOver');
    
  };

  return (
  <>
  <GuessResults guesses={guesses} answer={answer}></GuessResults>
  <GuessInput gameStatus={gameStatus} submitGuess={submitGuess}></GuessInput>
  <GameOverBanner answer={answer} guesses={guesses} gameStatus={gameStatus}></GameOverBanner>
  </>
  );
}

export default Game;

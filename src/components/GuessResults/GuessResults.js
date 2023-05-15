import React from "react";

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {range} from '../../utils';
import {checkGuess} from '../../game-helpers';

function GuessResults({guesses, answer}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess key={index} guess={guesses[index]} answer={answer}></Guess>

        )
      })}
      
  
    </div>
  );
}




const Guess = ({guess, answer}) => {

  if(guess === undefined) {
    return (
      <p className="guess">
        {range(5).map(index => {
          return (
            <span className="cell" key={Math.random()}></span>
          )
        })}
      </p>
    )
  }

  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map(index => {
        return (
          <span 
            className={'cell ' + checkedGuess[index].status} 
            key={Math.random()}>
            {guess ? guess[index] : ''}
          </span>
        )
      })}
    </p>
    
  )
};


export default GuessResults;
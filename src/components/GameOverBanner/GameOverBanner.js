import React from "react";

import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GameOverBanner({gameStatus, answer, guesses}) {


  if(gameStatus === 'gameWon') return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  )

  if(gameStatus === 'gameOver') return (
<div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
</div>
  )



  return <div></div>;
}

export default GameOverBanner;

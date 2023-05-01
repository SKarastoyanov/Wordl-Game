import React, { useState } from 'react';

import UserInput from '../UserInput'
import GuessResults from '../GuessResults/GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <UserInput guesses={guesses} setGuesses={setGuesses} answer={answer} />
  </>;
}

export default Game;

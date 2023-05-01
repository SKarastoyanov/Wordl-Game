import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


function GuessResults({ guesses, answer }) {
  const nextGuesses = [...guesses];

  const createGuessGrid = (guesses) => {
    if (nextGuesses.length < NUM_OF_GUESSES_ALLOWED) {
      nextGuesses.push({ label: '', id: crypto.randomUUID() });
    }
    if (nextGuesses.length < NUM_OF_GUESSES_ALLOWED) {
      createGuessGrid(guesses)
    }
  }

  createGuessGrid(guesses);

  return (
    <div className="guess-results">
      {
        nextGuesses.map(({ label, id }) => {
          return (
            <Guess key={id} guess={label} answer={answer} />
          )
        })
      }
    </div>
  )

}
export default GuessResults;

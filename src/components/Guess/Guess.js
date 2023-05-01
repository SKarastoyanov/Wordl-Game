import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

export default function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((num, index) => {
        const getResult = checkGuess(guess, answer);
        let status = "cell";
        let letter = '';
        if (getResult) {
          status = `cell ${getResult[num].status}`;
          letter = getResult[num].letter;
        }
        return (
          < span className={status} key={index}>{letter}</span>
        )
      })}
    </p >
  )
}
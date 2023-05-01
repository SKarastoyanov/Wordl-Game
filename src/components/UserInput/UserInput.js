import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

export default function UserInput({ guesses, setGuesses, answer }) {
    const [input, setInput] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
            return;
        }
        const newGuess = { label: input, id: crypto.randomUUID() }
        const nextGuesses = [...guesses, newGuess];
        setGuesses(nextGuesses);

        setInput('');
    }

    const isWinner = guesses[guesses.length - 1]?.label === answer;

    if (!isWinner && guesses.length !== NUM_OF_GUESSES_ALLOWED) {
        return (
            <form className="guess-input-wrapper" hidden={false} onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    required
                    minLength={5}
                    maxLength={5}
                    pattern="[a-zA-Z]{5}"
                    title="5 letter word"
                    id="guess-input"
                    type="text" value={input}
                    onChange={(event) => setInput(event.target.value.toUpperCase())} />
            </form >
        )
    } else if (isWinner) {
        return (
            <div className="happy banner">
                <p><strong>Congratulations!</strong> Got it in <strong>{`${guesses.length} guesses!`}</strong>.</p>
                <button onClick={() => window.location.reload(false)}>Start over</button>
            </div>
        )
    } else {
        return (
            <div className="sad banner">
                <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                <button className='' onClick={() => window.location.reload(false)}>Start over</button>
            </div>
        )
    }
}
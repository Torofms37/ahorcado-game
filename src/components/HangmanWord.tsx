type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
}

export const HangmanWord = ({guessedLetters, wordToGuess}: HangmanWordProps) => {
  return (
    <div className='flex gap-[0.25rem] text-[6rem] font-bold uppercase font-mono'>
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          <span style={{visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

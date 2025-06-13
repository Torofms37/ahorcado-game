type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
}

export const HangmanWord = ({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) => {
  return (
    <div className='flex gap-[0.25rem] text-[6rem] font-bold uppercase font-mono'>
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-8 border-black" key={index}>
          <span style={{visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: reveal && !guessedLetters.includes(letter) ? 'red' : 'black'}}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

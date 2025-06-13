const head = (
  <div className="w-[50px] h-[50px] rounded-full border-7 border-black absolute top-[50px] right-[-20px]"></div>
);
const body = (
  <div className="absolute w-[10px] h-[100px] bg-black top-[100px] right-0"></div>
);
const armRight = (
  <div className="absolute w-[100px] h-[10px] bg-black top-[120px] right-[-85px] rotate-[-35deg] origin-left-bottom"></div>
);
const legRight = (
  <div className="absolute w-[100px] h-[10px] bg-black top-[220px] right-[-85px] rotate-[215deg] origin-left-bottom"></div>
);
const armLeft = (
  <div className="absolute w-[100px] h-[10px] bg-black top-[120px] right-[0px] rotate-[30deg] origin-right-bottom"></div>
);
const legLeft = (
  <div className="absolute w-[100px] h-[10px] bg-black top-[220px] right-[-5px] rotate-[-215deg] origin-right-bottom"></div>
);

const bodyParts = [
  head,
  body,
  armRight,
  armLeft,
  legRight,
  legLeft
];

type HangmanDrawingProps = {
  numberOfGuesses: number;
}

export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {bodyParts.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black top-0 right-0 absolute"></div>
      <div className="h-[10px] w-[200px] ml-[120px] bg-black"></div>
      <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
      <div className="h-[10px] w-[250px] bg-black"></div>
    </div>
  );
};

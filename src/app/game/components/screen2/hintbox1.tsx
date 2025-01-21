import { LockKeyholeIcon, LockKeyholeOpen } from "lucide-react"
import { MixedFraction } from "../../game-state";
import arrow from "../../assets/arrowleft.png"
import { useState } from "react";
import { useGameState } from "../../state-utils";

interface HintBox1Props {
  text: string;
  stepNumber: number;
  mixedFraction: MixedFraction;
}

export default function HintBox1({ text, stepNumber, mixedFraction }: HintBox1Props) {

  const { gameStateRef, setGameStateRef } = useGameState();
  const [ans, setAns] = useState<string>("?");

  const handleHint = () => {
    setAns((mixedFraction.whole * mixedFraction.denominator).toString());
    setGameStateRef({ ...gameStateRef.current, state2: { ...gameStateRef.current.state2, step: 2 } });

  }


  return (
    <div className="flex items-center justify-left bg-pink-500 content-center rounded-[20px] px-7 py-6 m-6 w-[90%] lg:w-[70%]">
      {ans === "?" ? <div className="bg-[#b40033] p-4 rounded-[15px] cursor-pointer" onClick={handleHint}>
        <LockKeyholeIcon color="white" size={60} />
      </div> :
        <div className="bg-white p-4 rounded-[15px] cursor-pointer" onClick={handleHint}>
          <LockKeyholeOpen color="#b40033" size={60} />
        </div>}

      <div className="text-[40px] text-white w-1/2 text-left mx-6">
        {text}
      </div>

      <div className="bg-white flex items-center justify-center px-6 rounded-sm mx-6 ml-auto">
        <div className="text-[40px] text-black pr-2">
          {mixedFraction.whole}
        </div>
        <div className="flex items-center justify-center pt-6 ">
          <img src={arrow.src} alt="arrow" className="" />
          <div className="text-[40px] text-pink-500 absolute bg-white">x</div>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-[40px]">
          <span className="w-full text-gray-500 border-b-4 border-black px-2">{mixedFraction.numerator}</span>
          <span>{mixedFraction.denominator}</span>
        </div>
      </div>

      <div className="flex-col items-center justify-center text-center min-ml-9 ml-auto mb-2">
        <div className="text-white text-[30px]">{mixedFraction.denominator} x {mixedFraction.whole}</div>
        <div className="px-6 py-4 shadow-[-4px_4px_0px_0px_rgba(0,0,0)] rounded-sm bg-white min-w-[72px] text-center">
          <span className="text-[40px] leading-none">{ans}</span>
        </div>
      </div>

    </div>
  )
}
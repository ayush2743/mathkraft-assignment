import { LockKeyholeIcon, LockKeyholeOpen } from "lucide-react"
import { MixedFraction } from "../../game-state";
import arrow from "../../assets/arrowright.png"
import { useState } from "react";

interface HintBox2Props {
  text: string;
  stepNumber: number;
  mixedFraction: MixedFraction;
}

export default function HintBox2({ text, stepNumber, mixedFraction }: HintBox2Props) {

  const [ans, setAns] = useState<string>("?");

  const handleHint = () => {
    setAns((mixedFraction.whole * mixedFraction.denominator + mixedFraction.numerator).toString());
  }


  return (
    <div className="flex-col items-center justify-center text-center m-6 w-[90%] lg:w-[70%]">
      <div className="flex items-center justify-left bg-pink-500 rounded-t-[20px] px-7 py-6">
      {ans === "?" ? <div className="bg-[#b40033] p-4 rounded-[15px] cursor-pointer" onClick={handleHint}>
        <LockKeyholeIcon color="white" size={60} />
      </div> :
        <div className="bg-white p-4 rounded-[15px] cursor-pointer" onClick={handleHint}>
          <LockKeyholeOpen color="#b40033" size={60} />
        </div>}

        <div className="text-[40px] text-white w-1/2 text-left mx-6">
          {text}
        </div>

        <div className="bg-white flex items-center justify-center px-4 rounded-sm mx-6 ml-auto">
          <div className="text-[40px] text-black pr-2">
            {mixedFraction.whole * mixedFraction.denominator}
          </div>
          <div className="flex items-center justify-center pb-8 ">
            <img src={arrow.src} alt="arrow" className="" />
            <div className="text-[40px] text-pink-500 absolute bg-white">+</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center text-[40px]">
            <span className="w-full text-gray-500 border-b-4 border-black px-2">{mixedFraction.numerator}</span>
            <span>{mixedFraction.denominator}</span>
          </div>
        </div>

        <div className="flex-col items-center justify-center text-center min-ml-10 ml-auto mb-2 opacity-0">
          <div className="text-white text-[30px]">{mixedFraction.denominator} x {mixedFraction.whole}</div>
          <div className="px-6 py-4 shadow-[-4px_4px_0px_0px_rgba(0,0,0)] rounded-sm bg-white w-[80px]">
            <span className="h-0 text-[40px] leading-none">{ans}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center content-center bg-[#c50037] gap-10 py-10 px-7 rounded-b-[20px]">
        <div className="flex-col items-center justify-center text-center min-w-32">
          <div className="px-6 py-4 shadow-[-4px_4px_0px_0px_rgba(0,0,0)] rounded-sm bg-white w-fit min-w-[80px] mx-auto">
            <span className="h-0 text-[40px] leading-none">{ans}</span>
          </div>
          <div className="min-h-0 border-2 my-4  border-white text-center w-full"></div>
          <div className="px-6 py-4 shadow-[-4px_4px_0px_0px_rgba(0,0,0)] rounded-sm bg-white w-fit min-w-[80px] mx-auto">
            <span className="h-0 text-[40px] leading-none">{mixedFraction.denominator}</span>
          </div>
        </div>

        {ans != "?" && <div className="text-white text-[40px]">
          We get the same answer as with pies
        </div>}

      </div>
    </div>
  )
}
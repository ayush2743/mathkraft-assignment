import { useState } from "react"
import { MixedFraction } from "../../game-state"
import arrowright from "../../assets/arrowright.png"
import arrowleft from "../../assets/arrowleft.png"


interface HintProps {
  mixedFraction: MixedFraction
}

export default function Hint({ mixedFraction }: HintProps) {

  const [hint, setHint] = useState<boolean>(false);

  const handlehint = () => {
    setHint(true);
  }

  return (
    <div className="flex-col justify-center items-stretch w-fit">

      <h1 className="text-[40px] h-[200px] 2xl:h-[124px] text-center content-center py-10 px-32 bg-[#f7e4d6]">Hint</h1>
    

      <div className="bg-[#f4d8c5] h-[225px] flex justify-center items-center">
        {!hint && <button className="py-2 px-8 flex justify-center items-center border border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0)]  text-[25px] text-black bg-white font-normal" onClick={handlehint}>
          See Hint
        </button>}

        {hint &&

          <div className="bg-white flex items-center justify-center px-4 rounded-lg border-4 border-[#ad4600]">
            <div className="text-[40px] text-black pr-2">
              {mixedFraction.whole}
            </div>
            <div className="flex-col items-center justify-center relative">
              <img src={arrowright.src} alt="arrow" className="py-1" />
              <div className="text-[40px] text-pink-500 absolute bg-white left-6 bottom-11 leading-none">+</div>
              <img src={arrowleft.src} alt="arrow" className="py-2" />
              <div className="text-[35px] font-normal leading-none text-pink-500 absolute bg-white left-6 bottom-2">x</div>
            </div>

            <div className="flex flex-col items-center justify-center text-center text-[40px]">
              <span className="w-full border-b-4 border-black px-2">{mixedFraction.numerator}</span>
              <span>{mixedFraction.denominator}</span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
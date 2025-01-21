import { MixedFraction } from "../../game-state"


interface MixedFractionProps {
  mixedFraction: MixedFraction
}

export default function MixedForm({ mixedFraction }: MixedFractionProps) {
  return (
    <div className="flex-col justify-center items-center w-fit">
      <h1 className="text-[40px] h-[200px] 2xl:h-[124px] text-center p-10 bg-[#ffb7c9]">Mixed Form</h1>

      <div className="bg-[#ffd3dd] px-16 h-[225px]  flex justify-center items-center">
        <div className="flex items-center gap-2 text-[40px] bg-white w-fit border border-black p-6 leading-none">
          <span>{mixedFraction.whole}</span>
          <div className="w-[48px] flex flex-col items-center justify-center text-center">
            <span className="w-full border-b-2 border-black">{mixedFraction.numerator}</span>
            <span className="p-1">{mixedFraction.denominator}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
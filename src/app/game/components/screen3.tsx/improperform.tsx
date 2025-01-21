import { MixedFraction } from "../../game-state"


interface ImproperFormProps {
  mixedFraction: MixedFraction
}

export default function ImproperForm({ mixedFraction }: ImproperFormProps) {
  return (
    <div className="flex-col justify-center items-center">
      <h1 className="text-[40px] h-[200px] 2xl:h-[124px] text-center py-10 px-16 bg-[#ffa9c0]">Improper Form</h1>

      <div className="bg-[#ffd3dd] h-[225px] flex justify-center items-center">
        <div className="min-w-20">
          <div className="flex-col items-center justify-center text-center">
              <input
              type="text"
              className="p-2 shadow-[-4px_4px_0px_0px_rgba(0,0,0)] rounded-sm bg-white w-[52px] mx-auto text-center text-[35px] leading-none"
              />
            <div className="min-h-0 border my-4  border-black text-center"></div>
            <input
              type="text"
              className="p-2 shadow-[-4px_4px_0px_0px_rgba(0,0,0)] rounded-sm bg-white w-[52px] mx-auto text-center text-[35px] leading-none"
              />
          </div>
        </div>
        </div>
    </div>
  )
}
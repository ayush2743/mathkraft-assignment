import { mix } from "framer-motion";
import LevelBox2 from "../../components/levelbox2";
import HintBox1 from "../../components/screen2/hintbox1";
import { useGameState } from "../../state-utils";
import HintBox2 from "../../components/screen2/hintbox2";



export default function Hints() {

    const { gameStateRef, setGameStateRef } = useGameState();
    const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <LevelBox2 heading={"Quick Hack"} stepNumber={1} emoji="🤫" mixedFraction={mixedFraction} />
      <HintBox1 text={"Multiply denominator and wholes"} stepNumber={1} mixedFraction={mixedFraction}/>
      { gameStateRef.current.state2.step == 2 && 
        <HintBox2 text={"Add the numerator, Denominator remains same"} stepNumber={2} mixedFraction={mixedFraction}/>
      }
    </div>
  )
}
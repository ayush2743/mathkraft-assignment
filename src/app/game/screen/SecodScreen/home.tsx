import LevelBox from "../../components/levelbox";
import NextStepBox from "../../components/nextstepbox";
import { useGameState } from "../../state-utils";

export default function Screen2HomePage() {

  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div className="mx-auto flex flex-col items-center">
    <LevelBox text={"Quick Hack"} mixedFraction={mixedFraction} />
    <div className="text-[78px] text-center text-pink-500 border-[15px] px-36 border-pink-500 bg-white">A quicker way</div>
    <NextStepBox text="TRY >>" nextStep={() => {
      setGameStateRef({ ...gameStateRef.current, state2: { ...gameStateRef.current.state2, step: 1 } });
    }} />
  </div>
  );
}
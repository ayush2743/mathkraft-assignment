import { useGameState } from '../../state-utils';
import HomePage from './home';
import Hints from './hints';

export default function SecondScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();

  if (gameStateRef.current.state2.step == 0) {
    return (
      <HomePage />
    )
  }

  if (gameStateRef.current.state2.step >= 1) {
    return (
      <Hints/>
    )
  }


}


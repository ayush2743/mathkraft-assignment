import { useEffect } from 'react';
import { useRef } from 'react';
import FirstScreen from './screen/FirstScreen/first';
import SecondScreen from './screen/SecodScreen/second';
import { useGameState } from './state-utils';
import { DevHelper } from './utils/helper';
import ThirdScreen from './screen/ThirdScreen/third';


interface GameProps {
  sendAdminMessage: (role: string, content: string) => void;
}

export default function Game({sendAdminMessage}: GameProps) {
  const { gameStateRef } = useGameState();
  const { screen } = gameStateRef.current;
  const { step: step1 } = gameStateRef.current.state1;
  const { step: step2 } = gameStateRef.current.state2;
  

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [step1, step2]);

  return (
    <div className="mx-auto game font-jersey">
      <DevHelper />
      {/* Game screens */}

      {screen === 'first' && <FirstScreen />}
      {screen === 'second' && <SecondScreen />}
      {screen === 'third' && <ThirdScreen />}
      
      {/* Select font */}
      <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');
          .font-jersey {
            font-family: 'Jersey 25', cursive;
          }
        `}</style>

    </div>
  )
}
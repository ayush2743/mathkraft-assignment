import { useGameState } from '../../state-utils';
import Heading from '../../components/screen3.tsx/heading';
import MixedForm from '../../components/screen3.tsx/mixedform';
import ImproperForm from '../../components/screen3.tsx/improperform';
import Hint from '../../components/screen3.tsx/hint';

export default function ThirdScreen() {
  const { gameStateRef } = useGameState();
  const { step, mixedFraction1, mixedFraction2 } = gameStateRef.current.state3;

  return (
    <div className="mx-auto">
      <Heading />
      <div className='flex-col justify-center items-center'>
        <div className='flex justify-center items-center my-20 mx-auto w-[80%] space-x-10 xl:space-x-20'>
          <MixedForm mixedFraction={mixedFraction1} />
          <ImproperForm mixedFraction={mixedFraction1} />
          <Hint mixedFraction={mixedFraction1} />
        </div>
        <div className='flex justify-center items-center my-20 mx-auto w-[80%] space-x-10 xl:space-x-20'>
          <MixedForm mixedFraction={mixedFraction2} />
          <ImproperForm mixedFraction={mixedFraction2} />
          <Hint mixedFraction={mixedFraction2} />
        </div>
      </div>
    </div>
  )
}


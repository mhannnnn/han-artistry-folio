import { useState } from 'react';
import walkGif from '@/assets/character-walk.gif';
import explodeGif from '@/assets/character-explode.gif';

const WalkingCharacter = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = () => {
    if (isExploding) return;
    
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 3500);
  };

  return (
    <div className="absolute bottom-8 left-0 w-full h-24 overflow-hidden pointer-events-none">
      <img
        src={isExploding ? explodeGif : walkGif}
        alt="Character"
        onClick={handleClick}
        className={`absolute h-20 w-20 cursor-pointer pointer-events-auto transition-transform ${
          isExploding ? '' : 'animate-walk-across'
        }`}
        style={isExploding ? { left: '50%', transform: 'translateX(-50%)', bottom: '0' } : {}}
      />
    </div>
  );
};

export default WalkingCharacter;

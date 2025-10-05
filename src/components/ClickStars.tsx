import { useEffect, useState } from 'react';
import starGif from '@/assets/star.gif';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
}

const ClickStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Random size between 1-5 cm (converting to pixels, roughly 1cm = 37.8px)
      const minSize = 37.8; // 1cm
      const maxSize = 189; // 5cm
      const randomSize = Math.random() * (maxSize - minSize) + minSize;

      const newStar: Star = {
        id: Date.now() + Math.random(),
        x: e.pageX, // Use pageX for exact position including scroll
        y: e.pageY, // Use pageY for exact position including scroll
        size: randomSize,
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 1500);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-50" style={{ position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '100vh' }}>
      {stars.map((star) => (
        <img
          key={star.id}
          src={starGif}
          alt=""
          className="absolute animate-star-pop"
          style={{
            left: `${star.x - star.size / 2}px`,
            top: `${star.y - star.size / 2}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default ClickStars;

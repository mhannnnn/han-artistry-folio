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
        x: e.clientX,
        y: e.clientY + window.scrollY, // Account for scroll position
        size: randomSize,
      };

      setStars((prev) => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, 1500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {stars.map((star) => (
        <img
          key={star.id}
          src={starGif}
          alt=""
          className="absolute animate-star-pop"
          style={{
            left: star.x - star.size / 2,
            top: star.y - star.size / 2,
            width: star.size,
            height: star.size,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default ClickStars;

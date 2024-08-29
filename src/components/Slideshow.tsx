import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "../constants/images";
import { FaPause } from "react-icons/fa";

export default function Images() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(600);
  const interval = useRef<number>();

  const startInterval = useCallback(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setActiveIndex(prev => {
        if (prev === images.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 1500 - speed);
  }, [speed]);

  useEffect(() => {
    if (isPlaying) {
      startInterval();
    }

    if (!isPlaying) {
      clearInterval(interval.current);
    }
  }, [isPlaying, startInterval]);

  const renderedImages = images.map((image, index) => {
    return (
      <picture key={image.src}>
        <source src={image.webp} type="image/webp" />
        <img
          className={`absolute h-full w-full object-cover ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          } ${image.className || ""}`}
          src={image.src}
          alt=""
        />
      </picture>
    );
  });

  return (
    <>
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <div className="absolute z-10 inset-0 flex items-center justify-center pointer-events-none">
          {!isPlaying && <FaPause className="text-white text-6xl opacity-80" />}
        </div>
        {renderedImages}
        <button
          className="absolute inset-0"
          onClick={() => {
            setIsPlaying(prev => !prev);
          }}
        ></button>
      </div>
      <div className="mt-4">
        <p>SPEED</p>
        <input
          className="range"
          type="range"
          min={0}
          max={1200}
          value={speed}
          onChange={e => setSpeed(parseInt(e.target.value))}
        />
      </div>
    </>
  );
}

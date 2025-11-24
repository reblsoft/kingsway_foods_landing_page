import React, { useRef, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode[];
  onActiveChange?: (index: number) => void;
}

const InfiniteScreenshots: React.FC<Props> = ({ children, onActiveChange }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const cardWidth = 260; // your card width + gap
  const intervalTime = 2000;

  // Duplicate items for infinite loop
  const items = [...children, ...children, ...children];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let index = activeIndex;

    const interval = setInterval(() => {
      index++;
      setActiveIndex(index);
      onActiveChange?.((index - 2) % children.length);

      track.style.transition = "transform 0.6s ease";
      track.style.transform = `translateX(-${index * cardWidth}px)`;

      if (index >= children.length * 2) {
        setTimeout(() => {
          track.style.transition = "none";
          index = 2;
          setActiveIndex(index);
          onActiveChange?.(0);
          track.style.transform = `translateX(-${index * cardWidth}px)`;
        }, 620);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [children.length, onActiveChange]);

  return (
    <div className="overflow-hidden w-full max-w-[1241px] flex justify-center">
      <div ref={trackRef} className="flex gap-[50px]">
        {items.map((child, i) => (
          <div
            key={`slide-${i}`}
            className={`transition-all duration-700 ${
              i === activeIndex ? "scale-110" : "scale-90 opacity-80"
            }`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScreenshots;

"use client";

import { useState, useEffect } from "react";

type SlideImage = {
  path: string;
  caption?: string;
};

export default function ImageSlider({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i < images.length - 1 ? i + 1 : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const prev = () => setIndex(i => (i > 0 ? i - 1 : images.length - 1));
  const next = () => setIndex(i => (i < images.length - 1 ? i + 1 : 0));

  if (!images || images.length === 0) return null;

  return (
    <div className="image-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="slide">
            <img src={`/${img.path}`} alt={img.caption || ""} />
            {img.caption && <div className="caption">{img.caption}</div>}
          </div>
        ))}
      </div>
      <button className="prev" onClick={prev}>&lt;</button>
      <button className="next" onClick={next}>&gt;</button>
    </div>
  );
}

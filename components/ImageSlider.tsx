"use client";

import { useState, useCallback, useEffect } from "react";

type SlideImage = {
  path: string;
  caption?: string;
};

export default function ImageSlider({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="slider-container">
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => {
            const src = img.path.startsWith("/") ? img.path : `/${img.path}`;
            return (
              <div key={i} className="slider-item">
                <img
                  src={src}
                  alt={img.caption || `Slide ${i + 1}`}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="slider-btn slider-btn-prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="slider-btn slider-btn-next"
              onClick={next}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            
            <div className="slider-counter">
              <span>{index + 1}</span> / <span>{images.length}</span>
            </div>
          </>
        )}
      </div>

      {images[index]?.caption && (
        <div className="slider-caption-box">
          <p>{images[index].caption}</p>
        </div>
      )}
    </div>
  );
}

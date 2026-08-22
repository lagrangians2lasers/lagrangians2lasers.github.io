"use client";

import { useState, useEffect, useCallback } from "react";

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

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [images.length, next]);

  if (!images || images.length === 0) return null;

  return (
    <div className="slider-wrapper" style={{ margin: "2rem 0" }}>
      <div className="image-slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => {
            const src = img.path.startsWith("/") ? img.path : `/${img.path}`;
            return (
              <div key={i} className="slide">
                <img src={src} alt={img.caption || `Slide ${i + 1}`} />
                {img.caption && <div className="caption">{img.caption}</div>}
              </div>
            );
          })}
        </div>
        {images.length > 1 && (
          <>
            <button
              className="prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              &#10094;
            </button>
            <button
              className="next"
              onClick={next}
              aria-label="Next slide"
            >
              &#10095;
            </button>
            <div
              className="slider-dots"
              style={{
                position: "absolute",
                bottom: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "6px",
                zIndex: 11,
              }}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor:
                      i === index ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

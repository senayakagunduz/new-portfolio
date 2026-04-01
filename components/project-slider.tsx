"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSliderProps {
  images: string[];
  title: string;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function ProjectSlider({
  images,
  title,
  autoplay = true,
  autoplayInterval = 4000,
}: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrev();
  };

  // Autoplay
  useEffect(() => {
    if (autoplay && !isHovered) {
      intervalRef.current = setInterval(goToNext, autoplayInterval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, isHovered, goToNext, autoplayInterval]);

  if (images.length === 0) return null;

  const isSingle = images.length === 1;

  return (
    <div
      className="relative overflow-hidden w-full aspect-[4/3] md:aspect-[16/9] group/slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={image}
              alt={`${title} - ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay for better button visibility */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300" />

      {/* Navigation Arrows */}
      {!isSingle && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-slate-800" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-slate-800" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {!isSingle && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-6 h-2 bg-white shadow-md"
                  : "w-2 h-2 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {!isSingle && (
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

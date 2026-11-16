import { useEffect, useRef } from 'react';

interface AutoScrollOptions {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  speedMultiplier: number;
  isPageFlipMode?: boolean;
  onPageFlipNext?: () => void;
  onComplete?: () => void;
}

/**
 * Robust Interval-Based Auto Scroll Hook
 * Calculates scroll heights dynamically and performs smooth scrolling on a stable interval.
 * Bypasses OS/browser-specific requestAnimationFrame throttling for offline/background resilience.
 */
export function useAutoScroll({
  containerRef,
  isActive,
  speedMultiplier,
  isPageFlipMode = false,
  onPageFlipNext,
  onComplete
}: AutoScrollOptions) {
  const timerRef = useRef<any>(null);

  useEffect(() => {
    // Cleanup any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!isActive) return;

    if (isPageFlipMode) {
      // 3D Pothi Mode: periodic auto flipping
      const baseIntervalMs = 6000;
      const flipIntervalMs = Math.max(1000, Math.round(baseIntervalMs / speedMultiplier));
      
      timerRef.current = setInterval(() => {
        if (onPageFlipNext) {
          onPageFlipNext();
        }
      }, flipIntervalMs);
    } else {
      // Continuous Scrolling Mode: interval-based smooth steps for seamless cross-platform performance
      const stepIntervalMs = 16; // ~60fps step frequency
      const basePxPerStep = 0.5; // Base step increment
      const pxPerStep = basePxPerStep * speedMultiplier;

      timerRef.current = setInterval(() => {
        const container = containerRef.current;
        if (container) {
          const currentScrollBottom = container.clientHeight + container.scrollTop;
          const totalScrollHeight = container.scrollHeight;

          // Check if bottom reached (with 5px tolerance)
          if (currentScrollBottom >= totalScrollHeight - 5) {
            if (onComplete) onComplete();
          } else {
            container.scrollTop += pxPerStep;
          }
        } else {
          // Window fallback scrolling
          const currentScrollBottom = window.innerHeight + window.scrollY;
          const totalScrollHeight = document.documentElement.scrollHeight;

          if (currentScrollBottom >= totalScrollHeight - 5) {
            if (onComplete) onComplete();
          } else {
            window.scrollBy(0, pxPerStep);
          }
        }
      }, stepIntervalMs);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isActive, speedMultiplier, isPageFlipMode, containerRef, onPageFlipNext, onComplete]);
}

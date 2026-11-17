import { useEffect, useRef } from 'react';

interface AutoScrollOptions {
  containerRef?: React.RefObject<HTMLDivElement | null> | null;
  isActive: boolean;
  speedMultiplier: number;
  isPageFlipMode?: boolean;
  onPageFlipNext?: () => void;
  onComplete?: () => void;
}

/**
 * Robust Cross-Platform Auto Scroll Hook for Saheb World
 * 
 * Works seamlessly across:
 * 1. Specific container refs (Zen Mode, Nitnem Gutka reader)
 * 2. Mobile viewports where #root has `height: 100dvh` and `overflow-y: auto`, while `html, body` has `overflow: hidden`
 * 3. Desktop / large viewports where window and documentElement scroll
 * 4. Android WebViews & iOS Safari using whole-integer subpixel accumulation so that fractional
 *    scroll increments (e.g. 0.2x, 0.5x, 0.75x) are never truncated to 0 by native setters.
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
  const accumulatedPxRef = useRef<number>(0);

  useEffect(() => {
    // Cleanup any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    accumulatedPxRef.current = 0;

    if (!isActive) return;

    if (isPageFlipMode) {
      // 3D Pothi Mode: periodic auto flipping
      const baseIntervalMs = 6000;
      const flipIntervalMs = Math.max(1000, Math.round(baseIntervalMs / Math.max(0.1, speedMultiplier || 1.0)));
      
      timerRef.current = setInterval(() => {
        if (onPageFlipNext) {
          onPageFlipNext();
        }
      }, flipIntervalMs);
    } else {
      // Continuous Scrolling Mode
      const stepIntervalMs = 20; // 50 updates per second (smooth, resilient, battery friendly)
      // Base step: 0.75px per 20ms at 1.0x (~37.5 px/second - comfortable sacred reading pace)
      const basePxPerStep = 0.75;
      const effectiveMultiplier = Math.max(0.1, Math.min(speedMultiplier || 1.0, 10.0));
      const deltaPx = basePxPerStep * effectiveMultiplier;

      timerRef.current = setInterval(() => {
        accumulatedPxRef.current += deltaPx;
        
        // Wait until we accumulate at least 1 full integer pixel to avoid subpixel WebView truncation
        if (accumulatedPxRef.current < 1) {
          return;
        }

        const pxToScroll = Math.floor(accumulatedPxRef.current);
        accumulatedPxRef.current -= pxToScroll;

        const stopAndComplete = () => {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          if (onComplete) onComplete();
        };

        // 1. Check if an explicit containerRef is provided with scrollable content
        const container = containerRef?.current;
        if (container && container.scrollHeight > container.clientHeight + 15) {
          const currentScrollBottom = container.clientHeight + container.scrollTop;
          const totalScrollHeight = container.scrollHeight;

          // Check if bottom reached (with 8px tolerance)
          if (currentScrollBottom >= totalScrollHeight - 8) {
            stopAndComplete();
          } else {
            container.scrollTop += pxToScroll;
          }
          return;
        }

        // 2. Fallback to application root and window scrolling
        const rootEl = typeof document !== 'undefined' ? document.getElementById('root') : null;
        const docEl = typeof document !== 'undefined' ? document.documentElement : null;
        const bodyEl = typeof document !== 'undefined' ? document.body : null;

        // Mobile responsive check: On screens <= 768px, #root has height: 100dvh and overflow-y: auto
        const isRootScrollable = !!(rootEl && (rootEl.scrollHeight > rootEl.clientHeight + 25));

        if (isRootScrollable && rootEl) {
          const currentScrollBottom = rootEl.clientHeight + rootEl.scrollTop;
          const totalScrollHeight = rootEl.scrollHeight;

          if (currentScrollBottom >= totalScrollHeight - 8) {
            stopAndComplete();
          } else {
            rootEl.scrollTop += pxToScroll;
            // Also invoke window.scrollBy safely in case layout transitions
            try {
              window.scrollBy(0, pxToScroll);
            } catch (_) {}
          }
        } else {
          // Window / documentElement / body scrolling (desktop or standard layout)
          const scrollTop = window.scrollY || window.pageYOffset || (docEl ? docEl.scrollTop : 0) || (bodyEl ? bodyEl.scrollTop : 0) || 0;
          const clientHeight = window.innerHeight || (docEl ? docEl.clientHeight : 0) || 0;
          const scrollHeight = Math.max(
            docEl ? docEl.scrollHeight : 0,
            bodyEl ? bodyEl.scrollHeight : 0,
            rootEl ? rootEl.scrollHeight : 0
          );

          const hasScrollableContent = scrollHeight > clientHeight + 25;

          if (hasScrollableContent && (scrollTop + clientHeight >= scrollHeight - 8)) {
            stopAndComplete();
          } else {
            window.scrollBy(0, pxToScroll);
            if (docEl && docEl.scrollTop !== undefined) docEl.scrollTop += pxToScroll;
            if (bodyEl && bodyEl.scrollTop !== undefined) bodyEl.scrollTop += pxToScroll;
            if (rootEl && rootEl.scrollTop !== undefined) rootEl.scrollTop += pxToScroll;
          }
        }
      }, stepIntervalMs);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      accumulatedPxRef.current = 0;
    };
  }, [isActive, speedMultiplier, isPageFlipMode, containerRef, onPageFlipNext, onComplete]);
}

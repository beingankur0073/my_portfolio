import { useEffect, useRef, memo, useMemo } from "react";
import { animate } from "framer-motion";

const AnimatedNumber = memo(({ value, trigger }) => {
  const nodeRef = useRef();

  // 🧪 1. Parse the string cleanly or establish a fallback if text tokens exist
  const numericValue = useMemo(() => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
  }, [value]);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    // 🛑 2. If it's a non-numeric asset configuration (like "Class A" or "N/A"), output it directly
    if (numericValue === null) {
      node.textContent = value;
      return;
    }

    // If the scroll track or view context is not triggered yet, show a clean starting number
    if (!trigger) {
      node.textContent = "0";
      return;
    }

    // 🎬 3. Imperative frame loop engine (zero state re-renders!)
    const controls = animate(0, numericValue, {
      duration: 1.5, // Crisp speed acceleration (reduced from 2s to feel fast and sleek)
      ease: [0.16, 1, 0.3, 1], // Ultra-smooth out-quint deceleration curve matching your design theme
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [trigger, numericValue, value]);

  /* ✨ FIX: Instead of hardcoding 0 as the initial state, render the raw value string.
    This guarantees that if JS execution is slightly delayed, the user still sees 
    your accurate profile metrics immediately instead of an empty placeholder.
  */
  return <span ref={nodeRef} className="tabular-nums font-semibold text-white">{value || "0"}</span>;
});

AnimatedNumber.displayName = "AnimatedNumber";
export default AnimatedNumber;
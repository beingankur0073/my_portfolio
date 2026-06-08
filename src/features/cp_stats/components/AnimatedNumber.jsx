import { useEffect, useRef, memo } from "react";
import { animate } from "framer-motion";

const AnimatedNumber = memo(({ value, trigger }) => {
  const nodeRef = useRef();
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    const node = nodeRef.current;
    if (!trigger || isNaN(numericValue)) {
      if (node) node.textContent = 0;
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [trigger, numericValue]);

  return <span ref={nodeRef}>0</span>;
});

AnimatedNumber.displayName = "AnimatedNumber";
export default AnimatedNumber;
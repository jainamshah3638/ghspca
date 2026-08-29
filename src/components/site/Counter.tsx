import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Counter({ value, suffix = "", duration }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    
    // Auto-adjust duration so smaller numbers count smoothly without pausing at integer boundaries
    const actualDuration = duration ?? (value < 50 ? 0.8 : value < 1000 ? 1.2 : 1.8);

    const tick = (t: number) => {
      const elapsed = (t - start) / (actualDuration * 1000);
      const p = Math.min(elapsed, 1);
      
      // Quadratic ease-out provides smooth progression without getting stuck at the end
      const eased = 1 - (1 - p) * (1 - p);
      
      setN(Math.floor(eased * value));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setN(value);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
    >
      {n.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Lightweight scroll-reveal wrapper. Respects prefers-reduced-motion by
 * skipping the animation entirely (renders content statically instead).
 */
export default function Reveal({ children, delay = 0, y = 18, once = true, ...rest }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div {...rest}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

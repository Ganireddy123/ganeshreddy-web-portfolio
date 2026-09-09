import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { tokens } from '../theme.js';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), prefersReducedMotion ? 0 : 650);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <Box
          component={motion.div}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: tokens.bg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Box
            component={motion.div}
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: `3px solid ${tokens.border}`,
              borderTopColor: tokens.cyan,
            }}
          />
          <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: tokens.textMuted }}>
            loading portfolio&hellip;
          </Typography>
        </Box>
      )}
    </AnimatePresence>
  );
}

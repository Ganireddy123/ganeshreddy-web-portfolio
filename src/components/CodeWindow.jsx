import { Box, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { tokens } from '../theme.js';

const lines = [
  { indent: 0, tokens: [{ t: 'const', c: '#8B5CF6' }, { t: ' developer ', c: tokens.textHigh }, { t: '=', c: '#8B93AC' }, { t: ' {', c: tokens.textHigh }] },
  { indent: 1, tokens: [{ t: 'name', c: '#22D3EE' }, { t: ': ', c: '#8B93AC' }, { t: "'Ganesh Kumar Reddy'", c: '#8FE3B8' }, { t: ',', c: '#8B93AC' }] },
  { indent: 1, tokens: [{ t: 'stack', c: '#22D3EE' }, { t: ': ', c: '#8B93AC' }, { t: "['React', 'Java', 'Spring Boot']", c: '#8FE3B8' }, { t: ',', c: '#8B93AC' }] },
  { indent: 1, tokens: [{ t: 'focus', c: '#22D3EE' }, { t: ': ', c: '#8B93AC' }, { t: "'reliable, tested software'", c: '#8FE3B8' }] },
  { indent: 0, tokens: [{ t: '};', c: tokens.textHigh }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'ship', c: '#4F8CFF' }, { t: '(developer);', c: tokens.textHigh }] },
];

function CodeLine({ line, index }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <Box
      component={motion.div}
      initial={prefersReducedMotion ? undefined : { opacity: 0, x: -8 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.5 + index * 0.12, ease: 'easeOut' }}
      sx={{
        display: 'flex',
        gap: 1,
        pl: line.indent * 2.5,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: { xs: '0.78rem', sm: '0.85rem' },
        lineHeight: 1.9,
        whiteSpace: 'pre',
      }}
    >
      <Box component="span" sx={{ color: '#4A5578', userSelect: 'none', width: 18, flexShrink: 0 }}>
        {index + 1}
      </Box>
      <Box component="span">
        {line.tokens.map((tok, i) => (
          <Box key={i} component="span" sx={{ color: tok.c }}>{tok.t}</Box>
        ))}
      </Box>
    </Box>
  );
}

export default function CodeWindow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box
      role="img"
      aria-label="Stylized animated code editor showing a developer profile object being defined in JavaScript"
      sx={{
        position: 'relative',
        borderRadius: '16px',
        background: 'rgba(16, 22, 43, 0.7)',
        border: `1px solid ${tokens.borderStrong}`,
        boxShadow: '0 30px 80px -30px rgba(79,140,255,0.25), 0 10px 40px -15px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(18px)',
        overflow: 'hidden',
        maxWidth: 480,
        width: '100%',
        mx: { xs: 'auto', md: 0 },
      }}
    >
      {/* window chrome */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          px: 2,
          py: 1.25,
          borderBottom: `1px solid ${tokens.border}`,
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
          <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
        ))}
        <Box
          sx={{
            ml: 1.5,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.72rem',
            color: tokens.textMuted,
          }}
        >
          developer.js
        </Box>
      </Stack>

      <Box sx={{ p: { xs: 2, sm: 2.5 }, position: 'relative' }}>
        {lines.map((line, i) => (
          <CodeLine key={i} line={line} index={i} />
        ))}

        {/* blinking cursor */}
        {!prefersReducedMotion && (
          <Box
            component={motion.span}
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            sx={{
              display: 'inline-block',
              width: '7px',
              height: '14px',
              background: tokens.cyan,
              ml: 0.5,
              verticalAlign: 'middle',
              borderRadius: '1px',
            }}
          />
        )}
      </Box>

      {/* ambient glow accents */}
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: tokens.blue,
          filter: 'blur(90px)',
          opacity: 0.18,
          top: -60,
          right: -60,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: tokens.violet,
          filter: 'blur(80px)',
          opacity: 0.16,
          bottom: -50,
          left: -40,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}

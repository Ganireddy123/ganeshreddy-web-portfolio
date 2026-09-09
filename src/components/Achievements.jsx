import { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { achievements, achievementsNote } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

function Counter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1000;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, prefersReducedMotion]);

  return (
    <Typography
      ref={ref}
      variant="h2"
      sx={{
        fontSize: { xs: '2.4rem', sm: '2.8rem' },
        background: tokens.gradientPrimary,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {display}
      {suffix}
    </Typography>
  );
}

export default function Achievements() {
  return (
    <Box component="section" aria-label="Impact and achievements" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading title="Impact & Achievements" />

        <Grid container spacing={3}>
          {achievements.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <Reveal delay={i * 0.06}>
                <GlassCard sx={{ p: 3, height: '100%', textAlign: 'left' }}>
                  <Counter value={item.value} suffix={item.suffix} />
                  <Typography variant="body2" sx={{ color: tokens.textMuted, mt: 1.5 }}>
                    {item.label}
                  </Typography>
                </GlassCard>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Reveal delay={0.2}>
          <Typography variant="body2" sx={{ color: tokens.textMuted, mt: 3, fontStyle: 'italic', opacity: 0.75 }}>
            {achievementsNote}
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}

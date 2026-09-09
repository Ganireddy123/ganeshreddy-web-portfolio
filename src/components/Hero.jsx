import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Button, Chip, Tooltip } from '@mui/material';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import CodeWindow from './CodeWindow.jsx';
import { profile, heroRotatingText, heroSummary, heroHighlights } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

function RotatingLine() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroRotatingText.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <Box sx={{ minHeight: { xs: 28, sm: 32 }, position: 'relative' }}>
      <AnimatePresence mode="wait">
        <Typography
          key={index}
          component={motion.p}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: tokens.cyan,
            m: 0,
          }}
        >
          {heroRotatingText[index]}
        </Typography>
      </AnimatePresence>
    </Box>
  );
}

function GridBackground() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(148,163,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,214,0.07) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 85%)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,140,255,0.22) 0%, transparent 70%)',
          top: '-10%',
          left: '-8%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          top: '5%',
          right: '-10%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 70%)',
          bottom: '-15%',
          left: '30%',
        }}
      />
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      aria-label="Introduction"
      sx={{
        position: 'relative',
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 12 },
        overflow: 'hidden',
      }}
    >
      <GridBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              sx={{ color: tokens.textMuted, fontWeight: 500, letterSpacing: '0.02em', textTransform: 'none' }}
            >
              Hi, I&rsquo;m {profile.name}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.1rem', sm: '2.6rem', md: '3.1rem' },
                mt: 1,
                mb: 2,
                lineHeight: 1.15,
                background: tokens.gradientPrimary,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {profile.headline}
            </Typography>

            <RotatingLine />

            <Typography
              variant="body1"
              sx={{ color: tokens.textMuted, mt: 3, mb: 4, maxWidth: 560, fontSize: '1.02rem' }}
            >
              {heroSummary}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
              <Button
                size="large"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  background: tokens.gradientPrimary,
                  color: '#0B1020',
                  fontWeight: 700,
                  boxShadow: '0 12px 30px -10px rgba(79,140,255,0.55)',
                  '&:hover': { filter: 'brightness(1.08)', boxShadow: '0 16px 36px -10px rgba(79,140,255,0.7)' },
                }}
              >
                View My Work
              </Button>
              <Button
                size="large"
                variant="outlined"
                startIcon={<Mail size={18} />}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{ borderColor: tokens.borderStrong, color: tokens.textHigh, '&:hover': { borderColor: tokens.cyan, background: 'rgba(34,211,238,0.08)' } }}
              >
                Contact Me
              </Button>
              <Tooltip title={profile.resumeUrl ? '' : 'Resume link not yet added'}>
                <span>
                  <Button
                    size="large"
                    variant="text"
                    startIcon={<Download size={18} />}
                    disabled={!profile.resumeUrl}
                    href={profile.resumeUrl || undefined}
                    target={profile.resumeUrl ? '_blank' : undefined}
                    rel={profile.resumeUrl ? 'noopener noreferrer' : undefined}
                    sx={{ color: tokens.textMuted, '&:hover': { color: tokens.textHigh, background: 'rgba(255,255,255,0.04)' } }}
                  >
                    Download Resume
                  </Button>
                </span>
              </Tooltip>
            </Stack>

            <Stack direction="row" flexWrap="wrap" useFlexGap gap={1.2}>
              {heroHighlights.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  sx={{
                    color: tokens.textHigh,
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${tokens.border}`,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <CodeWindow />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

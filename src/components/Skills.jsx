import { useState } from 'react';
import { Box, Container, Stack, Typography, Chip } from '@mui/material';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Code2, Server, Database, FlaskConical, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { skillCategories } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  data: Database,
  testing: FlaskConical,
  tools: Wrench,
};

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].key);
  const prefersReducedMotion = useReducedMotion();
  const activeCategory = skillCategories.find((c) => c.key === active);

  return (
    <Box id="skills" component="section" aria-label="Technical skills" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Technical Skills"
          subtitle="A working toolkit across the frontend, backend, data, and quality layers of a product."
        />

        <Reveal>
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            gap={1.2}
            sx={{ mb: 3.5 }}
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.key];
              const isActive = active === cat.key;
              return (
                <Box
                  key={cat.key}
                  component="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat.key)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 1,
                    px: 2,
                    borderRadius: '999px',
                    border: `1px solid ${isActive ? 'transparent' : tokens.border}`,
                    background: isActive ? tokens.gradientPrimary : 'rgba(255,255,255,0.02)',
                    color: isActive ? '#0B1020' : tokens.textMuted,
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    '&:hover': { color: isActive ? '#0B1020' : tokens.textHigh, borderColor: tokens.borderStrong },
                  }}
                >
                  <Icon size={16} />
                  {cat.title}
                </Box>
              );
            })}
          </Stack>
        </Reveal>

        <AnimatePresence mode="wait">
          <Box
            key={active}
            component={motion.div}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard hoverLift={false} sx={{ p: { xs: 3, sm: 4 } }}>
              <Typography variant="h6" sx={{ color: tokens.textHigh, mb: 2.5 }}>
                {activeCategory.title}
              </Typography>
              <Stack direction="row" flexWrap="wrap" useFlexGap gap={1.2}>
                {activeCategory.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      color: tokens.textHigh,
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${tokens.border}`,
                      fontWeight: 500,
                      py: 2.2,
                      '&:hover': { borderColor: tokens.cyan, background: 'rgba(34,211,238,0.06)' },
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </Stack>
            </GlassCard>
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

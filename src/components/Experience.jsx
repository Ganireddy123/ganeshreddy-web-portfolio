import { Box, Container, Typography, Stack, Chip } from '@mui/material';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { experience } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

export default function Experience() {
  return (
    <Box id="experience" component="section" aria-label="Professional experience" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading title="Professional Experience" />

        <Box sx={{ position: 'relative', pl: { xs: 3, sm: 4 } }}>
          {/* timeline rail */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              left: { xs: 8, sm: 10 },
              top: 8,
              bottom: 8,
              width: '2px',
              background: 'linear-gradient(180deg, rgba(79,140,255,0.5), rgba(139,92,246,0.15))',
            }}
          />

          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <Box sx={{ position: 'relative', mb: i === experience.length - 1 ? 0 : 4 }}>
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    left: { xs: -28, sm: -34 },
                    top: 6,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: tokens.gradientPrimary,
                    border: `3px solid ${tokens.bg}`,
                    boxShadow: `0 0 0 2px ${tokens.borderStrong}`,
                  }}
                />

                <GlassCard sx={{ p: { xs: 3, sm: 4 } }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    spacing={1.5}
                    sx={{ mb: 2 }}
                  >
                    <Box>
                      <Stack direction="row" alignItems="center" spacing={1.2}>
                        <Briefcase size={18} color={tokens.cyan} />
                        <Typography variant="h5" sx={{ color: tokens.textHigh, fontSize: '1.15rem' }}>
                          {job.role}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: tokens.textMuted, mt: 0.5 }}>
                        {job.company} &middot; {job.duration}
                      </Typography>
                    </Box>
                    <Chip
                      label={job.badge}
                      size="small"
                      sx={{
                        color: tokens.blue,
                        background: 'rgba(79,140,255,0.1)',
                        border: `1px solid rgba(79,140,255,0.3)`,
                        fontWeight: 600,
                      }}
                    />
                  </Stack>

                  <Typography variant="body1" sx={{ color: tokens.textMuted, mb: 2.5 }}>
                    {job.description}
                  </Typography>

                  <Stack spacing={1.1}>
                    {job.highlights.map((h) => (
                      <Stack direction="row" spacing={1.2} key={h} alignItems="flex-start">
                        <CheckCircle2 size={16} color={tokens.teal} style={{ marginTop: 3, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: tokens.textHigh, opacity: 0.9 }}>
                          {h}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </GlassCard>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Container, Grid, Typography } from '@mui/material';
import { GraduationCap, Layers, TestTube2, GitBranch } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { aboutText, aboutStats } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

const statIcons = [GraduationCap, Layers, TestTube2, GitBranch];

export default function About() {
  return (
    <Box id="about" component="section" aria-label="About me" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading title="About Me" />

        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Reveal>
              <Typography variant="body1" sx={{ color: tokens.textMuted, fontSize: '1.05rem', maxWidth: 620 }}>
                {aboutText}
              </Typography>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {aboutStats.map((stat, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <Grid item xs={6} key={stat.label}>
                    <Reveal delay={i * 0.06}>
                      <GlassCard sx={{ p: 2.25, height: '100%' }}>
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(79,140,255,0.1)',
                            color: tokens.cyan,
                            mb: 1.5,
                          }}
                        >
                          <Icon size={18} />
                        </Box>
                        <Typography variant="body2" sx={{ color: tokens.textHigh, fontWeight: 600, lineHeight: 1.4 }}>
                          {stat.label}
                        </Typography>
                      </GlassCard>
                    </Reveal>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

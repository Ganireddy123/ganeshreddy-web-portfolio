import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { Award, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { certifications, education } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

export default function CertificationsEducation() {
  return (
    <Box id="certifications" component="section" aria-label="Certifications and education" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <SectionHeading title="Certifications" />
            <Stack spacing={2}>
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 0.06}>
                  <GlassCard sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(139,92,246,0.1)',
                        color: tokens.violet,
                        flexShrink: 0,
                      }}
                    >
                      <Award size={20} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: tokens.textHigh, fontWeight: 600 }}>
                        {cert.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: tokens.textMuted }}>
                        {cert.issuer}
                      </Typography>
                    </Box>
                  </GlassCard>
                </Reveal>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <SectionHeading title="Education" />
            <Reveal>
              <GlassCard sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(34,211,238,0.1)',
                      color: tokens.cyan,
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={20} />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ color: tokens.textHigh, fontWeight: 600 }}>
                      {education.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: tokens.textMuted, mt: 0.5 }}>
                      {education.institution}
                    </Typography>
                    <Typography variant="body2" sx={{ color: tokens.textMuted, mt: 0.5 }}>
                      {education.duration} &middot; {education.cgpa}
                    </Typography>
                  </Box>
                </Stack>
              </GlassCard>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

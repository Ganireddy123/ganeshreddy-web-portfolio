import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { Github, ExternalLink, ShieldCheck, TrendingUp, X, FolderGit2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { projects } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

function BadgeChip({ label, type }) {
  const isProfessional = type === 'professional';
  return (
    <Chip
      icon={isProfessional ? <ShieldCheck size={14} /> : <FolderGit2 size={14} />}
      label={label}
      size="small"
      sx={{
        color: isProfessional ? tokens.violet : tokens.teal,
        background: isProfessional ? 'rgba(139,92,246,0.12)' : 'rgba(20,184,166,0.12)',
        border: `1px solid ${isProfessional ? 'rgba(139,92,246,0.35)' : 'rgba(20,184,166,0.35)'}`,
        fontWeight: 600,
        '& .MuiChip-icon': { color: 'inherit' },
      }}
    />
  );
}

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <Box id="projects" component="section" aria-label="Selected projects" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Selected Work"
          subtitle="Personal builds and a professional contribution, clearly labeled."
        />

        <Grid container spacing={3}>
          {projects.map((project, i) => {
            const isProfessional = project.badgeType === 'professional';
            const points = project.results || project.outcomes || project.features || [];
            const pointsLabel = project.results ? 'Key results' : project.outcomes ? 'Key outcomes' : 'Key features';

            return (
              <Grid item xs={12} md={isProfessional ? 12 : 6} key={project.id}>
                <Reveal delay={i * 0.06}>
                  <GlassCard
                    sx={{
                      p: { xs: 3, sm: 4 },
                      height: '100%',
                      ...(isProfessional && {
                        background: 'rgba(139,92,246,0.04)',
                        borderColor: 'rgba(139,92,246,0.25)',
                      }),
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      justifyContent="space-between"
                      alignItems={{ xs: 'flex-start', sm: 'center' }}
                      spacing={1.5}
                      sx={{ mb: 2 }}
                    >
                      <Typography variant="h5" sx={{ color: tokens.textHigh, fontSize: '1.2rem' }}>
                        {project.name}
                      </Typography>
                      <BadgeChip label={project.badge} type={project.badgeType} />
                    </Stack>

                    <Stack direction="row" flexWrap="wrap" useFlexGap gap={0.8} sx={{ mb: 2.5 }}>
                      {project.stack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            color: tokens.textMuted,
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${tokens.border}`,
                          }}
                        />
                      ))}
                    </Stack>

                    <Typography variant="body2" sx={{ color: tokens.textMuted, mb: 2.5 }}>
                      {project.description}
                    </Typography>

                    <Stack spacing={1} sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ color: tokens.textHigh, fontWeight: 600 }}>
                        {pointsLabel}
                      </Typography>
                      {points.map((point) => (
                        <Stack direction="row" spacing={1.1} key={point} alignItems="flex-start">
                          <TrendingUp size={14} color={tokens.cyan} style={{ marginTop: 4, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: tokens.textMuted }}>
                            {point}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Stack direction="row" flexWrap="wrap" gap={1.2}>
                      {isProfessional ? (
                        <Button
                          variant="outlined"
                          startIcon={<ShieldCheck size={16} />}
                          onClick={() => setModalProject(project)}
                          sx={{ borderColor: 'rgba(139,92,246,0.4)', color: tokens.violet, '&:hover': { borderColor: tokens.violet, background: 'rgba(139,92,246,0.08)' } }}
                        >
                          Professional Contribution
                        </Button>
                      ) : (
                        <>
                          {project.githubUrl && (
                            <Button
                              variant="outlined"
                              startIcon={<Github size={16} />}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ borderColor: tokens.borderStrong, color: tokens.textHigh }}
                            >
                              GitHub
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              variant="outlined"
                              startIcon={<ExternalLink size={16} />}
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ borderColor: tokens.borderStrong, color: tokens.textHigh }}
                            >
                              Live Demo
                            </Button>
                          )}
                        </>
                      )}
                    </Stack>
                  </GlassCard>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Dialog
        open={Boolean(modalProject)}
        onClose={() => setModalProject(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: '#10162B',
            border: `1px solid ${tokens.border}`,
            borderRadius: '16px',
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: tokens.textHigh }}>
          Professional Contribution
          <IconButton onClick={() => setModalProject(null)} aria-label="Close dialog" sx={{ color: tokens.textMuted }}>
            <X size={18} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: tokens.textMuted }}>
            {modalProject?.confidentialityNote}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button onClick={() => setModalProject(null)} variant="contained" sx={{ background: tokens.gradientPrimary, color: '#0B1020', fontWeight: 700 }}>
            Understood
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

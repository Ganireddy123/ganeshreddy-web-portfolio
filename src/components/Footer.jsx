import { Box, Container, Stack, Typography, IconButton } from '@mui/material';
import { Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${tokens.border}`,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: tokens.textMuted, textAlign: { xs: 'center', sm: 'left' } }}>
            &copy; 2026 {profile.name}. Built with React and Material UI.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              sx={{ color: tokens.textMuted, '&:hover': { color: tokens.blue } }}
            >
              <Linkedin size={19} />
            </IconButton>
            {profile.github && (
              <IconButton
                component="a"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                sx={{ color: tokens.textMuted, '&:hover': { color: tokens.textHigh } }}
              >
                <Github size={19} />
              </IconButton>
            )}
            <IconButton
              component="a"
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              sx={{ color: tokens.textMuted, '&:hover': { color: tokens.cyan } }}
            >
              <Mail size={19} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

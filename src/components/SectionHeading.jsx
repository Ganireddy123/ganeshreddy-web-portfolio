import { Box, Typography } from '@mui/material';
import { tokens } from '../theme.js';
import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <Reveal>
      <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: align }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.7rem', sm: '2rem', md: '2.2rem' }, color: tokens.textHigh, mb: subtitle ? 1.2 : 0 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" sx={{ color: tokens.textMuted, maxWidth: 560, mx: align === 'center' ? 'auto' : 0 }}>
            {subtitle}
          </Typography>
        )}
        <Box
          sx={{
            width: 56,
            height: 3,
            borderRadius: 2,
            background: tokens.gradientPrimary,
            mt: 2,
            mx: align === 'center' ? 'auto' : 0,
          }}
        />
      </Box>
    </Reveal>
  );
}

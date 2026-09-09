import { Box } from '@mui/material';
import { tokens } from '../theme.js';

export default function GlassCard({ children, sx = {}, hoverLift = true, ...rest }) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${tokens.border}`,
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        ...(hoverLift && {
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: tokens.borderStrong,
            boxShadow: '0 20px 45px -25px rgba(79,140,255,0.35)',
          },
        }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

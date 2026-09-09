import { createTheme } from '@mui/material/styles';

// ---- Design tokens ----
// Base:      #0B1020  near-black navy background
// Surface:   #10162B  raised glass-panel base (used with opacity)
// Surface-2: #151C36  secondary raised surface
// Accents:   #4F8CFF electric blue · #8B5CF6 violet · #22D3EE cyan · #14B8A6 teal
// Text:      #EDF0FA high-emphasis · #9AA3BE muted

export const tokens = {
  bg: '#0B1020',
  surface: '#10162B',
  surface2: '#151C36',
  border: 'rgba(148, 163, 214, 0.14)',
  borderStrong: 'rgba(148, 163, 214, 0.28)',
  blue: '#4F8CFF',
  violet: '#8B5CF6',
  cyan: '#22D3EE',
  teal: '#14B8A6',
  textHigh: '#EDF0FA',
  textMuted: '#9AA3BE',
  gradientPrimary: 'linear-gradient(120deg, #4F8CFF 0%, #8B5CF6 55%, #22D3EE 100%)',
  gradientQuiet: 'linear-gradient(180deg, rgba(79,140,255,0.10) 0%, rgba(139,92,246,0.06) 100%)',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: tokens.bg,
      paper: tokens.surface,
    },
    primary: { main: tokens.blue },
    secondary: { main: tokens.violet },
    text: {
      primary: tokens.textHigh,
      secondary: tokens.textMuted,
    },
    divider: tokens.border,
  },
  typography: {
    fontFamily: '"Inter", "Manrope", system-ui, sans-serif',
    h1: { fontFamily: '"Manrope", sans-serif', fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontFamily: '"Manrope", sans-serif', fontWeight: 800, letterSpacing: '-0.015em' },
    h3: { fontFamily: '"Manrope", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontFamily: '"Manrope", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Manrope", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Manrope", sans-serif', fontWeight: 600 },
    body1: { fontFamily: '"Inter", sans-serif', lineHeight: 1.7 },
    body2: { fontFamily: '"Inter", sans-serif', lineHeight: 1.65 },
    button: { fontFamily: '"Inter", sans-serif', fontWeight: 600, textTransform: 'none' },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*:focus-visible': {
          outline: `2px solid ${tokens.cyan}`,
          outlineOffset: '3px',
          borderRadius: '4px',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.001ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.001ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        body: {
          scrollBehavior: 'smooth',
        },
        '::selection': {
          background: 'rgba(79,140,255,0.35)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: '20px', paddingBlock: '10px' },
      },
    },
  },
});

export default theme;

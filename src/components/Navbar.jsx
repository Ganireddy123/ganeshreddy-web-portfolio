import { useEffect, useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Tooltip,
} from '@mui/material';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const scrolled = useScrollTrigger({ threshold: 8, disableHysteresis: true });

  const handleNav = useCallback((href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? 'rgba(11,16,32,0.82)' : 'rgba(11,16,32,0.35)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${scrolled ? tokens.border : 'transparent'}`,
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1240, width: '100%', mx: 'auto', px: { xs: 2, md: 3 }, py: 0.5 }}>
          <Box
            component="a"
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            aria-label="Go to home section"
            sx={{
              width: 42,
              height: 42,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 800,
              fontSize: '0.95rem',
              color: tokens.textHigh,
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${tokens.borderStrong}`,
              mr: 2,
              flexShrink: 0,
            }}
          >
            {profile.initials}
          </Box>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
            component="nav"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <Button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  sx={{
                    color: isActive ? tokens.textHigh : tokens.textMuted,
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 700 : 500,
                    px: 1.5,
                    position: 'relative',
                    '&:hover': { color: tokens.textHigh, background: 'transparent' },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 14,
                      right: 14,
                      bottom: 6,
                      height: '2px',
                      borderRadius: '2px',
                      background: tokens.gradientPrimary,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0.4)',
                      transition: 'opacity 0.25s ease, transform 0.25s ease',
                    },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Tooltip title="Download my resume PDF">
              <Button
                variant="outlined"
                startIcon={<Download size={16} />}
                component="a"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: tokens.borderStrong,
                  color: tokens.textHigh,
                  '&:hover': { borderColor: tokens.blue, background: 'rgba(79,140,255,0.08)' },
                }}
              >
                Download Resume
              </Button>
            </Tooltip>
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: tokens.textHigh }}
          >
            <Menu size={22} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: '#0E1428',
            borderLeft: `1px solid ${tokens.border}`,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)} sx={{ color: tokens.textHigh }}>
            <X size={22} />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.href}
              onClick={() => handleNav(link.href)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                color: active === link.href ? tokens.textHigh : tokens.textMuted,
                '&:hover': { background: 'rgba(255,255,255,0.04)' },
              }}
            >
              <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2, mt: 'auto' }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Download size={16} />}
            component="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderColor: tokens.borderStrong, color: tokens.textHigh }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

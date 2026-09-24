import { useState } from 'react';
import { Box, Container, Grid, Typography, Stack, TextField, Button, Alert } from '@mui/material';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import GlassCard from './GlassCard.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data/portfolioData.js';
import { tokens } from '../theme.js';

const initialForm = { name: '', email: '', subject: '', message: '' };

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ganireddy94', href: profile.linkedin },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required.';
  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'submitting' | null

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus(null);
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _replyto: values.email,
          _subject: `Portfolio message: ${values.subject}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Message delivery failed');
      setValues(initialForm);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box id="contact" component="section" aria-label="Contact" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <SectionHeading title="Let&rsquo;s Build Something Great" />

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <GlassCard sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(79,140,255,0.1)',
                        color: tokens.blue,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={19} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: tokens.textMuted }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body1" sx={{ color: tokens.textHigh, fontWeight: 600 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </GlassCard>
                );
                return (
                  <Reveal key={item.label} delay={i * 0.05}>
                    {item.href ? (
                      <Box
                        component="a"
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{ display: 'block' }}
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {content}
                      </Box>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Reveal>
              <GlassCard hoverLift={false} sx={{ p: { xs: 3, sm: 4 } }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        value={values.name}
                        onChange={handleChange('name')}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        type="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        value={values.subject}
                        onChange={handleChange('subject')}
                        error={Boolean(errors.subject)}
                        helperText={errors.subject}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        minRows={4}
                        label="Message"
                        value={values.message}
                        onChange={handleChange('message')}
                        error={Boolean(errors.message)}
                        helperText={errors.message}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {status === 'success' && <Alert severity="success" sx={{ mb: 2 }}>Thanks for reaching out. Your message was sent successfully.</Alert>}
                      {status === 'error' && <Alert severity="error" sx={{ mb: 2 }}>Your message could not be sent. Please email me directly at {profile.email}.</Alert>}
                      <Button
                        type="submit"
                        disabled={status === 'submitting'}
                        size="large"
                        variant="contained"
                        endIcon={<Send size={17} />}
                        sx={{
                          background: tokens.gradientPrimary,
                          color: '#0B1020',
                          fontWeight: 700,
                          boxShadow: '0 12px 30px -10px rgba(79,140,255,0.5)',
                          '&:hover': { filter: 'brightness(1.08)' },
                        }}
                      >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </GlassCard>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

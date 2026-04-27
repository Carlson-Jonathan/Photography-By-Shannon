import { Box, TextField, Typography, Button, Alert } from '@mui/material';
import * as styles from '@styles/Contact';
import { useState } from 'react';

export default function ContactSection() {

  // Hooks
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value ?? '',
    }));
  };

  const URL = 'http://192.168.1.249:8000/api/contact';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');

    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');

      setForm({
        name: '',
        email: '',
        message: '',
        website: '',
      });

    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <Box sx={styles.page}>
      <Box component="form" sx={styles.container} onSubmit={handleSubmit}>

        <Typography sx={styles.title}>
          Contact Us
        </Typography>

        {status === 'success' && (
          <Alert severity="success" sx={styles.successAlert}>Message sent successfully.</Alert>
        )}

        {status === 'error' && (
          <Alert severity="error">Something went wrong. Please try again.</Alert>
        )}

        <TextField label="Name" sx={styles.labels} value={form.name ?? ''}
          onChange={handleChange('name')} fullWidth required />
        <TextField label="Email" sx={styles.labels} value={form.email ?? ''}
          onChange={handleChange('email')} fullWidth required />
        <TextField label="Message" sx={styles.labels} value={form.message ?? ''}
          onChange={handleChange('message')} multiline rows={5} fullWidth required />

        {/* 🐝 honeypot - spam bot decoy */}
        <TextField label="Website" value={form.website ?? ''}
          onChange={handleChange('website')} sx={{ display: 'none' }} autoComplete="off" />

        <Button type="submit" variant="contained" disabled={status === 'loading'}sx={styles.button}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>

      </Box>
    </Box>
  );
}
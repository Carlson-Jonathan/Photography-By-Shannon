import { useState } from 'react';
import { Box, TextField, Typography, Button, Alert } from '@mui/material';
import { styles } from '@styles/Contact';

export default function ContactSection() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value ?? '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');

    try {
      const res = await fetch("http://192.168.1.249:8000/api/contact", {
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
      setStatus('error');
    }
  };

  return (
    <Box sx={styles.section}>
      <Box component="form" sx={styles.container} onSubmit={handleSubmit}>

        <Typography sx={styles.title}>
          Contact Us
        </Typography>

        {status === 'success' && (
          <Alert severity="success">
            Message sent successfully.
          </Alert>
        )}

        {status === 'error' && (
          <Alert severity="error">
            Something went wrong. Please try again.
          </Alert>
        )}

        <TextField
          label="Name"
          value={form.name ?? ''}
          onChange={handleChange('name')}
          fullWidth
        />

        <TextField
          label="Email"
          value={form.email ?? ''}
          onChange={handleChange('email')}
          fullWidth
        />

        <TextField
          label="Message"
          value={form.message ?? ''}
          onChange={handleChange('message')}
          multiline
          rows={5}
          fullWidth
        />

        {/* 🐝 honeypot */}
        <TextField
          label="Website"
          value={form.website ?? ''}
          onChange={handleChange('website')}
          sx={{ display: 'none' }}
          autoComplete="off"
        />

        <Button
          type="submit"
          variant="contained"
          disabled={status === 'loading'}
          sx={styles.button}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>

      </Box>
    </Box>
  );
}
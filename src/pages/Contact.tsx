import { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { styles } from '@styles/Contact';

export default function ContactSection() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // 🐝 honeypot ALWAYS defined
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value ?? '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://192.168.1.249:8000/api/contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({
      name: '',
      email: '',
      message: '',
      website: '',
    });
  };

  return (
    <Box sx={styles.section}>
      <Box component="form" sx={styles.container} onSubmit={handleSubmit}>

        <Typography sx={styles.title}>
          Contact Us
        </Typography>

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

        {/* 🐝 Honeypot (hidden field) */}
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
          sx={styles.button}
        >
          Send Message
        </Button>

      </Box>
    </Box>
  );
}
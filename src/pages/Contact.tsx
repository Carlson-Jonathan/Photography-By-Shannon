import { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { styles } from '@styles/Contact';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://192.168.1.249:8000/api/contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={styles.section}>
      <Box sx={styles.container} component="form" onSubmit={handleSubmit}>
        <Typography sx={styles.title}>
          Contact Us
        </Typography>

        <TextField
          label="Name"
          value={form.name}
          onChange={handleChange('name')}
          fullWidth
        />

        <TextField
          label="Email"
          value={form.email}
          onChange={handleChange('email')}
          fullWidth
        />

        <TextField
          label="Message"
          value={form.message}
          onChange={handleChange('message')}
          multiline
          rows={5}
          fullWidth
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
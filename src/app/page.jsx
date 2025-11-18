'use client';
import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, ThemeProvider, CssBaseline } from '@mui/material';
import { useRouter } from 'next/navigation';
import { darkTheme } from '../theme';

export default function LoginPage() {
  const [userName , setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const correctUserName = 'admin';
  const correctPassword = '1234';

  const handleLogin = () => {
    if (password === correctPassword && userName === correctUserName) {
      router.push('/dashboard');
    } else {
      alert('Incorrect password or username!');
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh',display: 'flex',alignItems: 'center',justifyContent: 'center',bgcolor: 'background.default', p: 2, }} >
        <Paper
          elevation={0}
          sx={{ p: 3, borderRadius: 2, width: '100%', maxWidth: 400, display: 'flex',flexDirection: 'column',gap: 3,alignItems: 'center',backgroundColor: 'background.paper',}}>
            
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Welcome
          </Typography>
          <TextField
            label="UserName"
            placeholder="Try admin"
            type="text"
            variant="outlined"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Try 1234"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #7367f0 30%, #9c27b0 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #5b50d1 30%, #8c1db1 90%)',
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Enter the password to access the dashboard
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

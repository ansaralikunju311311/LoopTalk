import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, InputAdornment, DialogActions, Divider, Button, IconButton, Typography, Box, Grid } from '@mui/material';
import { Close, Person, Badge, Email, Phone, Lock, Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Register = ({ open, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          maxHeight: '100vh',
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }
      }}
      scroll="paper"
    >
      <Box sx={{ p: 3, position: 'relative' }}>
        <IconButton 
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'text.secondary',
            '&:hover': {
              color: 'primary.main',
              backgroundColor: 'rgba(79, 172, 254, 0.1)'
            }
          }}
        >
          <Close />
        </IconButton>
        <DialogTitle 
          sx={{ 
            textAlign: 'center',
            px: 0,
            pt: 0,
            pb: 2,
            background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '2rem'
          }}
        >
          Create Account
        </DialogTitle>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
          Join our community today and start connecting with amazing people
        </Typography>
      </Box>
      
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ 
        px: 4, 
        pt: 0, 
        pb: 2, 
        flex: '1 1 auto',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '3px',
        },
      }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Badge color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              borderRadius: '50px',
              background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #3a7bd5 0%, #00d1ff 100%)',
                boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)'
              },
            }}
          >
            Create Account
          </Button>
        </DialogActions>
      </form>
      
      <Box sx={{ px: 3, pb: 3, textAlign: 'center' }}>
        <Divider sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary">OR</Typography>
        </Divider>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
          <IconButton sx={{ bgcolor: '#4267B2', color: 'white', '&:hover': { bgcolor: '#3b5998' } }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ bgcolor: '#1DA1F2', color: 'white', '&:hover': { bgcolor: '#1a91da' } }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ bgcolor: '#0A66C2', color: 'white', '&:hover': { bgcolor: '#0959a8' } }}>
            <LinkedIn />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Already have an account?{' '}
          <Button 
            color="primary" 
            size="small" 
            onClick={onSwitchToLogin}
            sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
          >
            Sign In
          </Button>
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            width: 48, 
            height: 48, 
            borderRadius: '50%', 
            bgcolor: 'rgba(79, 172, 254, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1
          }}>
            <Lock color="primary" />
          </Box>
          <Typography variant="caption" color="text.secondary" align="center">
            Your data is securely encrypted
          </Typography>
          <Typography variant="caption" color="text.secondary" align="center" sx={{ opacity: 0.8 }}>
            We take your privacy seriously
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Register;
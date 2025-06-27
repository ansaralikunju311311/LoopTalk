import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userValidation } from '../../validation/Formvalidation';
import userRegister  from '../../api/auth';
import { 
  Dialog, 
  TextField, 
  InputAdornment, 
  Button, 
  IconButton, 
  Typography, 
  Box, 
  Divider,
  Grid,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import { Close, Person, Badge, Email, Phone, Lock, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
const Register = ({ open, onClose, onSwitchToLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    clearErrors
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  const password = watch('password');

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setError('');
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError('');
      
      const response = await userRegister(data);
      
      if (response.success) {
        // Registration successful
        setOpenSnackbar(true);
        setError('');
        // Optionally redirect to login or dashboard
        // navigate('/login');
      } else {
        // Registration failed with error message
        setError(response.message || 'Registration failed. Please try again.');
        setOpenSnackbar(true);
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'An unexpected error occurred during registration');
      setOpenSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseDialog = () => {
    reset();
    clearErrors();
    onClose();
  };

  return (
    <>
      <Dialog 
        open={open} 
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            maxHeight: '100vh',
            minHeight: '800px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }
        }}
        scroll="paper"
      >
        <Box sx={{ p: 3, position: 'relative' }}>
          <IconButton 
            onClick={handleCloseDialog}
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
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center',
              background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              mb: 1
            }}
          >
            Create Account
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Join our community today and start connecting with amazing people
          </Typography>
        </Box>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ 
            px: 4, 
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
                  {...register('firstName', {
                    required: userValidation.firstName.required,
                    minLength: {
                      value: userValidation.firstName.minLenght.value,
                      message: userValidation.firstName.minLenght.message
                    }
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color={errors.firstName ? 'error' : 'action'} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  {...register('lastName', {
                    required: userValidation.lastName.required,
                    minLength: {
                      value: userValidation.lastName.minLenght.value,
                      message: userValidation.lastName.minLenght.message
                    }
                  })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Badge color={errors.lastName ? 'error' : 'action'} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  {...register('email', {
                    required: userValidation.email.required,
                    pattern: {
                      value: userValidation.email.pattern.value,
                      message: userValidation.email.pattern.message
                    }
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color={errors.email ? 'error' : 'action'} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  {...register('phone', {
                    required: userValidation.phone.required,
                    minLength: {
                      value: userValidation.phone.minLenght.value,
                      message: userValidation.phone.minLenght.message
                    }
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone color={errors.phone ? 'error' : 'action'} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  {...register('password', {
                    required: userValidation.password.required,
                    minLength: {
                      value: userValidation.password.minLenght.value,
                      message: userValidation.password.minLenght.message
                    }
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color={errors.password ? 'error' : 'action'} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  {...register('confirmPassword', {
                    required: userValidation.confirmPassword.required,
                    minLength: {
                      value: userValidation.confirmPassword.minLenght.value,
                      message: userValidation.confirmPassword.minLenght.message
                    },
                    validate: value => 
                      value === password || 'Passwords do not match'
                  })}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color={errors.confirmPassword ? 'error' : 'action'} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 1 }}
                />
              </Grid>
            </Grid>

            <Box sx={{ p: 3, pt: 2, textAlign: 'center' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={isLoading}
                sx={{
                  py: 1.5,
                  borderRadius: '50px',
                  background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #3a7bd5 0%, #00d1ff 100%)',
                    boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)'
                  },
                  '&.Mui-disabled': {
                    background: '#e0e0e0',
                    color: '#a0a0a0',
                    boxShadow: 'none'
                  }
                }}
              >
                {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
              </Button>
            </Box>
          </Box>
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Register;
import React, { useState } from 'react';
import { userValidation } from '../../validation/Formvalidation.js';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Typography,
  Box,
  Divider,
  CircularProgress,
  Alert,
  Snackbar,
  FormHelperText
} from '@mui/material';
import { Close, Email, Lock, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
const Login = ({ open, onClose, onSwitchToRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setError('');
  };
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError('');
      console.log('Login data:', data);
    } catch (err) {
      setError(err.message || 'An error occurred during login');
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
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            background: 'linear-gradient(145deg, #ffffff 0%, #f9f9f9 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          },
        }}
      >
    <Box sx={{ p: 3, position: 'relative' }}>
      <IconButton 
        onClick={handleCloseDialog}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'text.secondary',
          '&:hover': {
            color: 'primary.main',
            backgroundColor: 'rgba(79, 172, 254, 0.1)'
          }
        }}
      >
        <Close />
      </IconButton>
      
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold',
            mb: 1,
            background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome Back!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sign in to continue to LoopTalk
        </Typography>
      </Box>
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
        <Box>
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            variant="outlined"
            error={!!errors.email}
            {...register('email', {
              required: userValidation.email.required,
              pattern: {
                value: userValidation.email.pattern.value,
                message: userValidation.email.pattern.message
              }
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color={errors.email ? 'error' : 'action'} />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 1 }}
          />
          {errors.email && (
            <FormHelperText error sx={{ mt: -1, mb: 1 }}>
              {errors.email.message}
            </FormHelperText>
          )}
        </Box>
        
        <Box>
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            error={!!errors.password}
            {...register('password', {
              required: userValidation.password.required,
              minLength: {
                value: userValidation.password.minLenght.value,
                message: userValidation.password.minLenght.message
              }
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color={errors.password ? 'error' : 'action'} />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 1 }}
          />
          {errors.password && (
            <FormHelperText error sx={{ mt: -1, mb: 1 }}>
              {errors.password.message}
            </FormHelperText>
          )}
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isLoading}
          sx={{
            mt: 3,
            mb: 2,
            py: 1.5,
            background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #3a7bd5 0%, #00d1ff 100%)',
            },
            '&.Mui-disabled': {
              background: '#e0e0e0',
              color: '#a0a0a0'
            }
          }}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
        </Button>
      </Box>
      
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button size="small" sx={{ textTransform: 'none' }}>
          Forgot password?
        </Button>
      </Box>
      <Divider sx={{ my: 3 }}>
        <Typography variant="caption" color="text.secondary">OR</Typography>
      </Divider>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
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
      <Typography variant="body2" color="text.secondary" align="center">
        Don't have an account?{' '}
        <Button 
          color="primary" 
          size="small" 
          onClick={() => {
            onSwitchToRegister();
          }}
          sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
        >
          Sign Up
        </Button>
      </Typography>
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

export default Login
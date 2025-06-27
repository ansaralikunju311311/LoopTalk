import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Avatar, 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField, 
  InputAdornment, 
  Divider 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  People, 
  Chat, 
  ConnectWithoutContact, 
  ArrowForward, 
  Facebook, 
  Twitter, 
  LinkedIn, 
  PersonAdd, 
  Close, 
  Email, 
  Lock 
} from '@mui/icons-material';
import Register from '../User/Register.jsx';

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
  },
}));

const HeroSection = styled(Section)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: { xs: 'column', lg: 'row' },
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  padding: theme.spacing(3),
  gap: theme.spacing(4),
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  textAlign: { xs: 'center', lg: 'left' },
  marginBottom: { xs: theme.spacing(6), lg: 0 },
}));

const CommunitySidebar = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  width: '100%',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  maxHeight: '80vh',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
  padding: theme.spacing(1.5, 4),
  borderRadius: '50px',
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
}));

const GradientText = styled('span')({
  background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
});

// Data
const features = [
  {
    icon: <People sx={{ fontSize: 50, color: '#4facfe', mb: 2 }} />,
    title: 'Connect',
    description: 'Find and connect with like-minded people who share your interests.'
  },
  {
    icon: <Chat sx={{ fontSize: 50, color: '#4facfe', mb: 2 }} />,
    title: 'Chat',
    description: 'Engage in meaningful conversations with our seamless chat interface.'
  },
  {
    icon: <ConnectWithoutContact sx={{ fontSize: 50, color: '#4facfe', mb: 2 }} />,
    title: 'Grow',
    description: 'Expand your network and grow both personally and professionally.'
  }
];

const users = [
  { _id: '1', name: 'Alex Johnson', email: 'alex@example.com', role: 'UI/UX Designer' },
  { _id: '2', name: 'Maria Garcia', email: 'maria@example.com', role: 'Software Engineer' },
  { _id: '3', name: 'James Wilson', email: 'james@example.com', role: 'Product Manager' },
  { _id: '4', name: 'Sarah Lee', email: 'sarah@example.com', role: 'Marketing Specialist' },
  { _id: '5', name: 'David Kim', email: 'david@example.com', role: 'Frontend Developer' },
];

const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <Box>
      {/* Hero Section with Community Sidebar */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'row' }, 
          alignItems: 'center', 
          gap: 4 
        }}>
          <HeroContent>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                mb: 3,
                background: 'linear-gradient(90deg, #fff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Welcome to <GradientText>LoopTalk</GradientText>
            </Typography>
            
            <Typography 
              variant="h5" 
              component="p" 
              gutterBottom
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              The platform where real connections happen. Share your thoughts, connect with amazing people, 
              and build meaningful relationships in a safe and welcoming environment.
            </Typography>
            
            <Box sx={{ 
              mt: 4, 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2, 
              justifyContent: { xs: 'center', lg: 'flex-start' } 
            }}>
              <StyledButton
                variant="contained"
                size="large"
                startIcon={<PersonAdd />}
                onClick={() => setRegisterOpen(true)}
                sx={{
                  color: '#fff',
                  background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #3a7bd5 0%, #00d1ff 100%)',
                  },
                  fontSize: '1.1rem',
                  px: 5,
                }}
                endIcon={<ArrowForward />}
              >
                Get Started
              </StyledButton>
              
              <StyledButton
                variant="outlined"
                size="large"
                // startIcon={<Login />}
                onClick={() => setIsLogin(true)}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  fontSize: '1.1rem',
                  px: 5,
                }}
              >
                Login
              </StyledButton>
            </Box>
          </HeroContent>

          <CommunitySidebar>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 'bold', color: '#fff' }}>
              Our <GradientText>Community</GradientText>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {users.map((user) => (
                <Box 
                  key={user._id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Avatar 
                    src={`https://i.pravatar.cc/150?u=${user._id}`}
                    alt={user.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'medium' }}>
                      {user.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {user.role}
                    </Typography>
                  </Box>
                  <Button 
                    variant="outlined" 
                    size="small"
                    sx={{
                      color: '#fff',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      },
                      textTransform: 'none',
                      fontSize: '0.75rem',
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    Connect
                  </Button>
                </Box>
              ))}
            </Box>
            <Button
              variant="text"
              endIcon={<ArrowForward />}
              sx={{
                mt: 2,
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': {
                  color: '#fff',
                  backgroundColor: 'transparent',
                },
              }}
            >
              View All Members
            </Button>
          </CommunitySidebar>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Section sx={{ bgcolor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
            Why Choose <GradientText>LoopTalk</GradientText>?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  {feature.icon}
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Login Dialog */}
      <Dialog 
        open={isLogin} 
        onClose={() => setIsLogin(false)}
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
            onClick={() => setIsLogin(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'text.secondary',
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
          
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #3a7bd5 0%, #00d1ff 100%)',
                },
              }}
            >
              Sign In
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
                setIsLogin(false);
                setRegisterOpen(true);
              }}
              sx={{ textTransform: 'none', p: 0, minWidth: 'auto' }}
            >
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Dialog>

      {/* Register Dialog */}
      <Register 
        open={registerOpen} 
        onClose={() => setRegisterOpen(false)}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setIsLogin(true);
        }}
      />
    </Box>
  );
};

export default Landing;

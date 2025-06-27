import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container, Paper, Grid, Avatar, Card, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { People, Chat, ConnectWithoutContact, ArrowForward, Facebook, Twitter, LinkedIn, Instagram, Login, PersonAdd } from '@mui/icons-material';

// const Section = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(8, 0,)
//   [theme.breakpoints.up('md')]:{
//     padding: theme.spacing(12, 0)
//   }
// }));
const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0), // ✅ fixed here
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  borderRadius: '16px',
  maxWidth: '1200px',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  margin: '0 auto',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4, 2),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const UserCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
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

const features = [
  {
    icon: <People sx={{ fontSize: 50, color: '#4facfe', mb: 2 }} />,
    title: 'Connect',
    description: 'Find and connect with like-minded people who share your interests and passions.'
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

// Dummy user data
const users = [
  { _id: '1', name: 'Alex Johnson', email: 'alex@example.com', role: 'UI/UX Designer' },
  { _id: '2', name: 'Maria Garcia', email: 'maria@example.com', role: 'Software Engineer' },
  { _id: '3', name: 'James Wilson', email: 'james@example.com', role: 'Product Manager' },
  { _id: '4', name: 'Sarah Lee', email: 'sarah@example.com', role: 'Marketing Specialist' },
  { _id: '5', name: 'David Kim', email: 'david@example.com', role: 'Frontend Developer' },
  { _id: '6', name: 'Emma Watson', email: 'emma@example.com', role: 'Backend Developer' },
];

console.log(users)

const Landing = () => {
  return (
    <Box>
      {/* Hero Section with Community Sidebar */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', gap: 4 }}>
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
            
            <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              <StyledButton
                component={Link}
                to="/login"
                variant="contained"
                size="large"
                startIcon={<Login />}
                sx={{
                  background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #3a7bd5 0%, #00d1ff 100%)',
                  },
                  fontSize: '1.1rem',
                  px: 5,
                }}
              >
                Login
              </StyledButton>
              <StyledButton
                component={Link}
                to="/register"
                variant="outlined"
                size="large"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: '#fff',
                  },
                  fontSize: '1.1rem',
                  px: 5,
                }}
                endIcon={<ArrowForward />}
              >
                Register
              </StyledButton>
            </Box>
          </HeroContent>

          <CommunitySidebar>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 'bold', color: '#fff' }}>
              Our <GradientText>Community</GradientText>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {users.slice(0, 5).map((user) => (
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
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: '#4facfe',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </Avatar>
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 'bold' }} noWrap>
                      {user.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }} noWrap>
                      {user.role}
                    </Typography>
                  </Box>
                  <IconButton 
                    size="small"
                    sx={{
                      color: '#4facfe',
                      backgroundColor: 'rgba(79, 172, 254, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(79, 172, 254, 0.2)',
                      },
                    }}
                    aria-label={`Connect with ${user.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Handle connect action here
                      console.log(`Connecting with ${user.name} (${user._id})`);
                    }}
                  >
                    <PersonAdd fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>
            <Button
              component={Link}
              to="/register"
              fullWidth
              variant="contained"
              size="small"
              sx={{
                mt: 3,
                background: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
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
                <FeatureCard>
                  {feature.icon}
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Community Section - Now moved to sidebar */}
      <Section sx={{ display: 'none' }}>
        {/* This section is kept for SEO but visually hidden */}
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
            Our <GradientText>Community</GradientText> Members
          </Typography>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        textAlign: 'center',
        py: 8,
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of users who are already connecting and sharing on LoopTalk.
          </Typography>
          <StyledButton
            component={Link}
            to="/register"
            variant="contained"
            size="large"
            sx={{
              background: '#fff',
              color: '#4facfe',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.9)',
              },
              fontSize: '1.1rem',
              px: 5,
            }}
          >
            Sign Up Now
          </StyledButton>
        </Container>
      </Section>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 4, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2 }}>
            <IconButton sx={{ color: '#4facfe', mx: 1 }}><Facebook /></IconButton>
            <IconButton sx={{ color: '#4facfe', mx: 1 }}><Twitter /></IconButton>
            <IconButton sx={{ color: '#4facfe', mx: 1 }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: '#4facfe', mx: 1 }}><Instagram /></IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} LoopTalk. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;
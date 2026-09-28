import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function MobileLanding() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#f5f5f5',
      pt: 2,
      pb: 4
    }}>
      <Container maxWidth="sm">
        {/* Header with Profile */}
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Avatar
              src="/ddi.jpg"
              alt="Siddu B R"
              imgProps={{ loading: 'eager', decoding: 'async' }}
              sx={{ 
                width: 180, 
                height: 180, 
                mx: 'auto',
                mb: 3,
                border: '4px solid rgb(126, 54, 26)',
                boxShadow: '0 6px 28px rgba(0,0,0,0.18)',
                objectFit: 'cover'
              }}
            />
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a237e', mb: 1 }}>
              Siddu B R
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              Frontend Developer
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              I craft responsive, accessible, and performant web experiences with React and modern tooling.
            </Typography>
            
            {/* Quick Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{ 
                  bgcolor: '#1a237e',
                  '&:hover': { bgcolor: '#0d47a1' }
                }}
              >
                Contact Me
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => scrollToSection('projects')}
                sx={{ 
                  borderColor: '#1a237e',
                  color: '#1a237e',
                  '&:hover': { borderColor: '#0d47a1', bgcolor: 'rgba(202, 204, 228, 0.04)' }
                }}
              >
                View Projects
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Quick Info Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 1, height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <LocationOnIcon sx={{ fontSize: 40, color: '#1a237e', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Benachigere , Gubbi Taluk,Tumkur , Karnataka,  Pincode 572223
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ borderRadius: 2, boxShadow: 1, height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 2 }}>
                <PhoneIcon sx={{ fontSize: 40, color: '#1a237e', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  +91 6364770595
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Social Links */}
        <Card sx={{ borderRadius: 3, boxShadow: 2, mb: 3 }}>
          <CardContent sx={{ py: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <Button
                component="a"
                href="https://github.com/Siddu19112007"
                target="_blank"
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{ 
                  borderColor: '#333',
                  color: '#333',
                  '&:hover': { borderColor: '#000', bgcolor: 'rgba(0,0,0,0.04)' }
                }}
              >
                GitHub
              </Button>
              <Button
                component="a"
                href="https: www.linkedin.com/in/Siddu19112007"
                target="_blank"
                variant="outlined"
                startIcon={<LinkedInIcon />}
                sx={{ 
                  borderColor: '#0077b5',
                  color: '#0077b5',
                  '&:hover': { borderColor: '#005885', bgcolor: 'rgba(0,119,181,0.04)' }
                }}
              >
                LinkedIn
              </Button>
              <Button
                component="a"
                href="mailto:siddu19112007@gmail.com"
                variant="outlined"
                startIcon={<MailOutlineIcon />}
                sx={{ 
                  borderColor: '#d32f2f',
                  color: '#d32f2f',
                  '&:hover': { borderColor: '#b71c1c', bgcolor: 'rgba(211,47,47,0.04)' }
                }}
              >
                Email
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* WhatsApp Quick Contact */}
        <Card sx={{ borderRadius: 3, boxShadow: 2, bgcolor: '#25D366', color: 'white' }}>
          <CardContent sx={{ py: 3, textAlign: 'center' }}>
            <WhatsAppIcon sx={{ fontSize: 48, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Chat on WhatsApp
            </Typography>
            <Button
              component="a"
              href="https://wa.me/9880339147"
              target="_blank"
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: 'white',
                color: '#25D366',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              Start Chat
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

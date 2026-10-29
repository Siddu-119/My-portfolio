
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  const roles = [
    'UI/UX Designer',
    'Full Stack Developer',
  ];

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        py: { xs: 8, sm: 10, md: 12 },
        textAlign: 'center',
        backgroundImage: 'url("/red.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:
          'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.48)',
        }}
      />

      <Container
        maxWidth="md"
        sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'white',
            letterSpacing: '0.18em',
            fontSize: { xs: '1rem', sm: '1.4rem' },
          }}
        >
          WELCOME
        </Typography>

        <Typography
          component="h1"
          sx={{
            fontWeight: 800,
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
            fontSize: { xs: '2rem', sm: '3rem', md: '3.8rem' },
            letterSpacing: { xs: '0.04em', sm: '0.08em' },
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          I AM SIDDU B R
        </Typography>

        <Typography
          component="h2"
          sx={{
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '1rem', sm: '1.3rem' },
            mb: 3,
          }}
        >
          Software Development Enthusiast
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 1, sm: 1.5 },
            mb: 3,
          }}
        >
          {roles.map((role) => (
            <Box
              key={role}
              sx={{
                px: { xs: 1.5, sm: 2 },
                py: 1,
                border: '1px solid rgba(255,255,255,0.7)',
                borderRadius: '24px',
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.95rem' },
                }}
              >
                {role}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
            fontSize: { xs: '0.9rem', sm: '1.1rem' },
            lineHeight: 1.8,
            maxWidth: '650px',
            mx: 'auto',
          }}
        >
          I build responsive web applications, develop reliable backend
          services, and turn ideas into practical digital solutions using
          modern technologies.
        </Typography>
      </Container>
    </Box>
  );
}

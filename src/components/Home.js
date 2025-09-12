import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
  // Typing animation for name and role
  const name = 'I AM SIDDU B R';
  const roles = ['I am Developer', 'I am Frontend Developer'];
  const [typedName, setTypedName] = useState('');
  const [showRole, setShowRole] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [typingRole, setTypingRole] = useState(false);

  // Typing animation for name
  useEffect(() => {
    let i = 0;
    setTypedName('');
    setShowRole(false);
    setTypedRole('');
    setTypingRole(false);
    const timer = setInterval(() => {
      setTypedName(name.slice(0, i + 1));
      i++;
      if (i === name.length) {
        clearInterval(timer);
        setTimeout(() => setShowRole(true), 400);
      }
    }, 70);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [roleIndex]);

  // Typing animation for role
  useEffect(() => {
    if (!showRole) return;
    let i = 0;
    setTypedRole('');
    setTypingRole(true);
    const currentRole = roles[roleIndex];
    // Clear the previous role before typing the next
    let clearTimeoutId = setTimeout(() => {
      const timer = setInterval(() => {
        setTypedRole(currentRole.slice(0, i + 1));
        i++;
        if (i === currentRole.length) {
          clearInterval(timer);
          setTypingRole(false);
          setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, 1200);
        }
      }, 60);
    }, typedRole.length > 0 ? 400 : 0); // If not first, pause before typing next
    setTypedRole('');
    return () => {
      clearTimeout(clearTimeoutId);
    };
  }, [showRole, roleIndex]);

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 2, sm: 4, md: 6 }, 
        textAlign: 'center',
        minHeight: '100vh',
        height: '100vh',
        backgroundImage: `url("/red.jpeg")`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-image 2s ease-in-out',
        imageRendering: 'high-quality',
        imageRendering: '-webkit-optimize-contrast',
        imageRendering: 'crisp-edges',
        fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        '@media (min-resolution: 2dppx)': {
          backgroundSize: 'cover',
          imageRendering: 'high-quality',
        },
        '@media (min-resolution: 3dppx)': {
          backgroundSize: 'cover',
          imageRendering: 'high-quality',
        },
      }}
    >
      {/* Dark overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 800, 
            mb: 2,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            minHeight: { xs: '1.2rem', sm: '1.5rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            letterSpacing: '0.1em',
            fontSize: { xs: '1.1rem', sm: '1.5rem' },
            fontStyle: 'italic',
            textTransform: 'uppercase'
          }}
        >
          WELCOME
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 800, 
            mt: 1,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            minHeight: { xs: '1.8rem', sm: '2.2rem' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            letterSpacing: '0.1em',
            fontSize: { xs: '1.5rem', sm: '2.1rem' },
            fontStyle: 'italic',
            textTransform: 'uppercase',
            whiteSpace: 'pre',
          }}
        >
          {typedName}
          <Box component="span" sx={{
            display: !showRole ? 'inline-block' : 'none',
            width: '1ch',
            ml: 0.5,
            bgcolor: 'white',
            height: { xs: '1.5rem', sm: '2.5rem' },
            animation: 'blink 1s steps(1) infinite',
          }} />
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: { xs: '1.2rem', sm: '1.5rem' },
          mt: 1,
        }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
              fontStyle: 'italic',
              minHeight: { xs: '1.2rem', sm: '1.5rem' },
              letterSpacing: '0.02em',
              whiteSpace: 'pre',
              width: 'fit-content',
            }}
          >
            {typedRole}
            <Box component="span" sx={{
              display: typingRole ? 'inline-block' : 'none',
              width: '1ch',
              ml: 0.5,
              bgcolor: 'white',
              height: { xs: '1.1rem', sm: '1.3rem' },
              animation: 'blink 1s steps(1) infinite',
            }} />
          </Typography>
        </Box>
        <style>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
        <Typography 
          variant="body1" 
          sx={{ 
            mt: 1.5,
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontSize: { xs: '0.9rem', sm: '1.1rem' },
            px: { xs: 1, sm: 0 }
          }}
        >
          I craft responsive, accessible, and performant web experiences with React and modern tooling.
        </Typography>
      </Container>
    </Box>
  );
}



import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
          Projects
        </Typography>
      </Container>
    </Box>
  );
}

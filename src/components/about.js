import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function About({
  name = 'Siddu B R',
  role = 'Frontend Developer',
  summary = `As a passionate Front-End Developer with a solid foundation in Computer Science, I bring hands-on experience in building responsive, user-centric web applications using React, HTML, CSS, and JavaScript. I specialize in crafting intuitive interfaces and deploying polished projects via GitHub, with recent work including a functional website clone and customized UI components using Material UI.
My approach is rooted in practical problem-solving and attention to detail, ensuring that every element contributes to a seamless user experience. I'm deeply curious about emerging technologies like AI and cloud computing, and I thrive in collaborative environments where I can contribute innovative solutions while continuously learning from experienced teams.
Driven by a desire to create meaningful digital experiences, I'm eager to join dynamic development teams where I can apply my technical skills, creativity, and growth mindset to deliver impactful front-end solutions.`,
  photoUrl = '',
  skills = [
    'React',
    'JavaScript',
    'HTML/CSS',
    'GitHub',
    'Problem Solving',
    'UI/UX Design',
  ],
  onContact,
  onDownloadResume,
}) {
  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 3, sm: 4, md: 5 } }}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              About
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              {role}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {summary}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => {
                  onContact();
                  // Smooth scroll to contact section
                  setTimeout(() => {
                    const contactSection = document.querySelector('[data-section="contact"]');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }} 
                disableElevation
              >
                Contact Me
              </Button>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="outlined" color="primary">
                  View Resume
                </Button>
              </a>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, sm: 6 } }} />

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Skills
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" color="default" />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ my: { xs: 4, sm: 6 } }} />

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Educational Qualifications
          </Typography>
          <Box sx={{
            mt: 3,
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            maxWidth: '100vw',
            '&:hover': { boxShadow: 2, transition: 'box-shadow 0.3s ease' },
          }}>
            <Box
              component="table"
              sx={{
                minWidth: 400,
                width: '100%',
                borderCollapse: 'collapse',
                '& th, & td': {
                  border: '1px solid',
                  borderColor: 'divider',
                  padding: { xs: '6px', sm: 2 },
                  textAlign: 'left',
                  verticalAlign: 'top',
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                },
                '& th': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                },
                '& tr:nth-of-type(even)': {
                  bgcolor: 'action.hover'
                },
                '& tr:hover': {
                  bgcolor: 'action.selected'
                },
                '& strong': {
                  color: 'primary.main',
                  fontWeight: 700
                }
              }}
            >
              <Box component="thead">
                <Box component="tr">
                  <Box component="th" sx={{ width: '25%' }}>Qualification</Box>
                  <Box component="th" sx={{ width: '40%' }}>Institution Name</Box>
                  <Box component="th" sx={{ width: '15%' }}>Duration</Box>
                  <Box component="th" sx={{ width: '20%' }}>Percentage / CGPA</Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td">
                    <strong>Diploma in Computer Science</strong>
                  </Box>
                  <Box component="td">
                    Sri Dharmasthala Manjunatheshwara Polytechnic<br />
                    <Typography variant="caption" color="text.secondary">
                      SDM Institute of Technology (SDMIT), Ujire
                    </Typography>
                  </Box>
                  <Box component="td">2023 – Present</Box>
                  <Box component="td">
                    <Chip 
                      label="80.70 / 8.22" 
                      color="primary" 
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td">
                    <strong>10th</strong>
                  </Box>
                  <Box component="td">
                  Shubhodaya English School<br />
                    <Typography variant="caption" color="text.secondary">
                    vinayaka nagar Gubbi Tumkur karnataka Pincode 572223
                    </Typography>
                  </Box>
                  <Box component="td">2023</Box>
                  <Box component="td">
                    <Chip 
                      label="86.2%" 
                      color="primary" 
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
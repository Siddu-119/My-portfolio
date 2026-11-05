
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
   role = '💻 Engineering Student |  Passionate About Software Development | Building Ideas Into Reality 🚀',
  summary = `I'm a BE student at Dayananda Sagar Academy of Technology and Management (DSATM), passionate about software development and building practical applications. I enjoy working with technologies such as React.js, JavaScript, HTML, CSS, Java, Spring Boot, MySQL and Python.

I have experience developing responsive web interfaces, building backend functionality, working with databases, and creating projects that solve real-world problems. I also enjoy exploring new technologies, experimenting with ideas, and improving my coding and problem-solving skills.

I'm always eager to learn, take on new challenges, and turn creative ideas into useful digital solutions.`,
  photoUrl = '',
  skills = [
    'React',
    'JavaScript',
    'HTML/CSS',
    'Spring Boot',
    'GitHub',
    'Problem Solving',
    'UI/UX Design',
    'Debugging',
    

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
                  onContact && onContact();
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

                {/* BE - DSATM */}
                <Box component="tr">
                  <Box component="td">
                    <strong>B.E.</strong>
                  </Box>
                  <Box component="td">
                    Dayananda Sagar Academy of Technology and Management (DSATM)
                    <br />
                    <Typography variant="caption" color="text.secondary">
                      Bengaluru, Karnataka
                    </Typography>
                  </Box>
                  <Box component="td">2026 – 2029</Box>
                  <Box component="td">
                    <Chip
                      label="Pursuing"
                      color="success"
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Box>

                {/* Diploma */}
                <Box component="tr">
                  <Box component="td">
                    <strong>Diploma in Computer Science</strong>
                  </Box>
                  <Box component="td">
                    Sri Dharmasthala Manjunatheshwara Polytechnic
                    <br />
                    <Typography variant="caption" color="text.secondary">
                      SDM Institute of Technology (SDMIT), Ujire
                    </Typography>
                  </Box>
                  <Box component="td">2023 – 2026</Box>
                  <Box component="td">
                    <Chip
                      label="72.50 / 8"
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                </Box>

                {/* 10th */}
                <Box component="tr">
                  <Box component="td">
                    <strong>10th</strong>
                  </Box>
                  <Box component="td">
                    Shubhodaya English School
                    <br />
                    <Typography variant="caption" color="text.secondary">
                      Vinayaka Nagar, Gubbi, Tumkur, Karnataka - 572223
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

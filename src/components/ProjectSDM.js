import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ProjectSDM() {
  return (
    <Box component="section" sx={{ py: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <Card variant="outlined">
          <CardContent>
            <Typography variant="overline" color="text.secondary">Project</Typography>
            <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
              SDM Polytechnic Clone Website
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>Description</Typography>
            <Stack component="ul" sx={{ pl: 2, mt: 1 }} spacing={0.5}>
              <Typography component="li" variant="body2">
                Built a functional clone of SDM POLYTECNIC using HTML, CSS, JavaScript.
              </Typography>
              <Typography component="li" variant="body2">
                Replicated core features: responsive navigation, media elements, and basic interactions.
              </Typography>
              <Typography component="li" variant="body2">
                Implemented dark mode toggle, simple login form, and product filters.
              </Typography>
            </Stack>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>Technologies Used</Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
              {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'].map((t) => (
                <Chip key={t} label={t} variant="outlined" />
              ))}
            </Stack>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>Highlights</Typography>
            <Stack component="ul" sx={{ pl: 2, mt: 1 }} spacing={0.5}>
              <Typography component="li" variant="body2">Live deployment on GitHub Pages.</Typography>
              <Typography component="li" variant="body2">Hands-on debugging and workflow experience.</Typography>
              <Typography component="li" variant="body2">Strengthened front-end development understanding.</Typography>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="https://collagewebsitclon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="https://github.com/Siddu-119/Collegeclonewebsite"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

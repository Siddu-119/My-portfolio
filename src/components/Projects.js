
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Projects() {
  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
          Projects
        </Typography>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="overline" color="text.secondary">
              Game Development Project
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
              Galaxy Strike
            </Typography>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>
              Description
            </Typography>

            <Stack component="ul" sx={{ pl: 2, mt: 1 }} spacing={0.5}>
              <Typography component="li" variant="body2">
                Developed a 2D space shooter game using Python and Pygame.
              </Typography>
              <Typography component="li" variant="body2">
                Created a 10-sector campaign with challenging enemies and 3 boss battles.
              </Typography>
              <Typography component="li" variant="body2">
                Implemented player movement, shooting mechanics, enemy attacks, and game progression.
              </Typography>
            </Stack>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>
              Technologies Used
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
              {['Python', 'Pygame', 'Git', 'GitHub', 'Vercel'].map((t) => (
                <Chip key={t} label={t} variant="outlined" />
              ))}
            </Stack>

            <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 700 }}>
              Highlights
            </Typography>

            <Stack component="ul" sx={{ pl: 2, mt: 1 }} spacing={0.5}>
              <Typography component="li" variant="body2">
                Developed a complete space shooter game with multiple levels.
              </Typography>
              <Typography component="li" variant="body2">
                Published the project source code on GitHub.
              </Typography>
              <Typography component="li" variant="body2">
                Created a dedicated website for the project.
              </Typography>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="https://galaxy-strike-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>

              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="https://github.com/Siddu-119/Galaxy-Strike"
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

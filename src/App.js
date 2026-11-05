
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Drawer from './components/Drawer';
import About from './components/about';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectSDM from './components/ProjectSDM';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const profileRole =
    '💻 Engineering Student | Passionate About Software Development | Building Ideas Into Reality 🚀';

  // Custom dark theme
  const appTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: { main: '#9c27b0' },
          secondary: { main: '#ff9800' },
          background: {
            default: '#1a1a1a',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.72)',
          },
        },
        typography: {
          fontFamily:
            'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
      }),
    []
  );

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(
      `[data-section="${sectionId}"]`
    );

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(
          `[data-section="${sections[i]}"]`
        );

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <div
        className="App"
        style={{
          display: 'flex',
          backgroundColor: appTheme.palette.background.default,
        }}
      >
        {!mobileOpen && (
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              position: 'fixed',
              top: 16,
              left: 16,
              zIndex: 1300,
              p: 0.5,
              background: 'transparent',
              '&:hover': {
                background: 'transparent',
              },
            }}
          >
            <MenuIcon sx={{ color: '#ffffff' }} />
          </IconButton>
        )}

        {/* Navigation Drawer */}
        <Drawer
          onSelect={(id) => scrollToSection(id)}
          activeSection={activeSection}
          profile={{
            name: 'Siddu B R',
            role: profileRole,
            avatarUrl: '/ddi.jpg',
          }}
          width={320}
          mobileOpen={mobileOpen}
          onClose={handleDrawerToggle}
          isMobile={isMobile}
          anchor="top"
        />

        <div
          style={{
            flex: 1,
            marginTop: 72,
            width: '100vw',
            maxWidth: '100vw',
            overflowX: 'hidden',
            transition: 'margin 0.3s ease-in-out',
          }}
        >
          {/* Home Section */}
          <div data-section="home">
            <Home />
          </div>

          {/* About Section */}
          <div data-section="about">
            <About
              name="Siddu B R"
              role={profileRole}
              onContact={() => scrollToSection('contact')}
              onDownloadResume={() =>
                console.log('Download resume clicked')
              }
            />
          </div>

          {/* Projects Section */}
          <div data-section="projects">
            <Projects />
            <ProjectSDM />
          </div>

          {/* Contact Section */}
          <div data-section="contact">
            <Contact
              onPhone={() =>
                (window.location.href = 'tel:+916364770595')
              }
              onEmail={() =>
                (window.location.href = 'mailto:siddu19112007@gmail.com')
              }
              onLinkedIn={() =>
                window.open(
                  'https://www.linkedin.com/in/Siddu B R-p-2247aa374',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

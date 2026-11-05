import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export default function MobileNavigation({ activeSection = 'home', onSelect }) {
  const handleChange = (event, newValue) => {
    onSelect && onSelect(newValue);
    
    // Update URL hash
    window.history.pushState(null, null, `#${newValue}`);
    
    // Smooth scroll to the respective section
    setTimeout(() => {
      const section = document.querySelector(`[data-section="${newValue}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(135deg, #C9E4F7 0%, #B8D9F0 100%)',
        borderRadius: '20px 20px 0 0',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1)',
        padding: '8px 16px 16px 16px',
        mx: 2,
        mb: 1
      }}
    >
      <BottomNavigation
        value={activeSection}
        onChange={handleChange}
        sx={{
          bgcolor: 'white',
          borderRadius: '16px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          '& .MuiBottomNavigationAction-root': {
            color: '#666',
            '&.Mui-selected': {
              color: '#1976d2',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.75rem',
              fontWeight: 500,
              marginTop: '4px',
            },
            '& .MuiSvgIcon-root': {
              fontSize: '1.5rem',
            },
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Likes"
          value="likes"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

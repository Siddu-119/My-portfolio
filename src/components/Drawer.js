
import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Drawer({
  onSelect,
  activeSection = 'home',
  width = 300,
  mobileOpen = false,
  onClose,
  isMobile = false,
  anchor = 'left',
  profile = {
    name: 'Siddu B R',
    role: 'Frontend Developer',
    avatarUrl: '/ddi.jpg',
  },
  links = [
    { id: 'home', label: 'Home', icon: <HomeIcon /> },
    { id: 'about', label: 'About', icon: <InfoIcon /> },
    { id: 'projects', label: 'Projects', icon: <WorkIcon /> },
    { id: 'contact', label: 'Contact', icon: <ContactSupportIcon /> },
  ],
  socials = [
    { id: 'github', icon: <GitHubIcon />, href: 'https://github.com/Siddu-119/my-portfolio' },
    { id: 'instagram', icon: <InstagramIcon />, href: 'https://instagram.com/your_instagram_username' },
    { id: 'email', icon: <MailOutlineIcon />, href: 'mailto:siddu19112007@gmail.com' },
  ],
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const effectiveIsMobile = isMobile || isSmallScreen;
  const firstItemRef = useRef(null);
  const isTop = anchor === 'top';

  const handleSelect = (id) => () => {
    onSelect && onSelect(id);
    window.history.pushState(null, null, `#${id}`);
    setTimeout(() => {
      const section = document.querySelector(`[data-section="${id}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    // Focus first item when drawer opens, or on desktop where it acts as a side nav
    if (mobileOpen || !effectiveIsMobile) {
      setTimeout(() => {
        if (firstItemRef.current) {
          firstItemRef.current.focus();
        }
      }, 0);
    }
  }, [mobileOpen, effectiveIsMobile]);

  return (
    <Box sx={{ 
      width: anchor === 'top' ? '100%' : (effectiveIsMobile ? '100%' : width), 
      height: anchor === 'top' ? 'auto' : '100dvh', 
      borderRight: anchor === 'left' ? (effectiveIsMobile ? 0 : 1) : 0, 
      borderBottom: anchor === 'top' ? 1 : 0,
      borderColor: 'divider', 
      bgcolor: anchor === 'top' ? '#e3f2fd' : 'background.paper',
      color: anchor === 'top' ? '#0f172a' : 'text.primary',
      position: 'fixed',
      top: 0,
      left: 0,
      transform: anchor === 'top' 
        ? (mobileOpen ? 'translateY(0)' : 'translateY(-100%)') 
        : (mobileOpen ? 'translateX(0)' : 'translateX(-100%)'),
      zIndex: 1200,
      overflow: anchor === 'top' ? 'visible' : 'hidden',
      transition: 'transform 0.3s ease-in-out',
      boxShadow: 3,
      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'env(safe-area-inset-bottom)'
    }} aria-label="Primary navigation" aria-expanded={mobileOpen} aria-hidden={!mobileOpen}>
      {isTop ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 }, px: { xs: 1, sm: 2 }, py: { xs: 1, sm: 1.5 } }}>
          <Avatar
            src={profile.avatarUrl}
            alt={profile.name}
            imgProps={{ loading: 'eager', decoding: 'async' }}
            sx={{ 
              width: { xs: 40, sm: 64 }, 
              height: { xs: 40, sm: 64 }, 
              border: `2px solid ${theme.palette.divider}`,
              objectFit: 'cover'
            }}
          />
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700, mr: 1, display: { xs: 'none', sm: 'block' } }}>
            {profile.name}
          </Typography>
          <List sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            py: 0, 
            gap: { xs: 0.25, sm: 0.5 },
            flexWrap: 'nowrap',
            overflowX: 'auto',
            maxWidth: '100%',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none'
          }}>
            {links.map((item, index) => (
              <ListItem key={item.id} disablePadding sx={{ width: 'auto' }}>
                <ListItemButton
                  onClick={handleSelect(item.id)}
                  ref={index === 0 ? firstItemRef : undefined}
                  sx={{
                    px: { xs: 1.25, sm: 2 },
                    py: { xs: 0.75, sm: 1 },
                    borderRadius: 1,
                    bgcolor: activeSection === item.id ? 'primary.main' : 'transparent',
                    color: activeSection === item.id ? '#fff' : '#111827',
                    '&:hover': { bgcolor: activeSection === item.id ? 'primary.dark' : 'rgba(0,0,0,0.04)' },
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.icon ? (
                    <ListItemIcon sx={{ minWidth: { xs: 28, sm: 32 }, color: activeSection === item.id ? '#fff' : '#475569' }}>
                      {item.icon}
                    </ListItemIcon>
                  ) : null}
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ sx: { fontWeight: activeSection === item.id ? 700 : 500, display: { xs: 'none', sm: 'inline' } } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {socials.map((s) => (
              <IconButton
                key={s.id}
                size="small"
                color="inherit"
                component="a"
                href={s.href}
                target={s.href?.startsWith('http') ? '_blank' : undefined}
                rel={s.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.id}
              >
                {s.icon}
              </IconButton>
            ))}
            <IconButton onClick={onClose} aria-label="Close" sx={{ color: 'inherit' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 2,
              py: 2.5,
              bgcolor: 'transparent',
              color: 'text.primary',
            }}
          >
            <Avatar
              src={profile.avatarUrl}
              alt={profile.name}
              sx={{ 
                width: 56, 
                height: 56, 
                border: `2px solid ${theme.palette.divider}`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700 }}>
                {profile.name}
              </Typography>
              <Typography variant="body2" noWrap color="text.secondary">
                {profile.role}
              </Typography>
            </Box>
            <IconButton
              onClick={onClose}
              aria-label="Close drawer"
              sx={{ color: 'inherit' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Navigation */}
          <Box component="nav" role="navigation" aria-label="Sections" sx={{ flex: 1, overflowY: 'auto', pb: 8 }}>
            <List sx={{ py: 0 }}>
              {links.map((item, index) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton 
                    onClick={handleSelect(item.id)}
                    ref={index === 0 ? firstItemRef : undefined}
                    sx={{
                      bgcolor: activeSection === item.id ? 'primary.main' : 'transparent',
                      color: activeSection === item.id ? '#fff' : 'text.primary',
                      '&:hover': {
                        bgcolor: activeSection === item.id ? 'primary.dark' : 'action.hover',
                      },
                      transition: 'all 0.3s ease',
                      borderRadius: 1,
                      mx: 1,
                      mb: 0.5
                    }}
                  >
                    {item.icon ? (
                      <ListItemIcon sx={{ 
                        color: activeSection === item.id ? '#fff' : 'text.secondary' 
                      }}>
                        {item.icon}
                      </ListItemIcon>
                    ) : null}
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ 
                        sx: { 
                          color: activeSection === item.id ? '#fff' : 'text.primary', 
                          fontWeight: activeSection === item.id ? 700 : 500 
                        } 
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider />

          {/* Footer / Socials row and large X for mobile - always at bottom, only in mobile view */}
          {effectiveIsMobile && (
            <Box sx={{
              position: 'fixed',
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '100vw',
              bgcolor: '#e3f2fd',
              borderTop: 1,
              borderColor: 'divider',
              boxShadow: 8,
              zIndex: 3000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: 2,
              px: 2,
            }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 1, justifyContent: 'center', width: '100%' }}>
                {socials.map((s) => (
                  <IconButton
                    key={s.id}
                    size="large"
                    color="inherit"
                    component="a"
                    href={s.href}
                    target={s.href?.startsWith('http') ? '_blank' : undefined}
                    rel={s.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.id}
                    sx={{ fontSize: 32 }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Box>
              <IconButton onClick={onClose} aria-label="Close drawer" sx={{ color: 'error.main', bgcolor: 'rgba(0,0,0,0.04)', borderRadius: 2, fontSize: 36, mb: 0.5 }}>
                <CloseIcon sx={{ fontSize: 36 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}
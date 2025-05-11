import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';

const navItems = [
  { label: 'Vision', id: 'vision' },
  { label: 'Challenges', id: 'challenges' },
  { label: 'Solution', id: 'solution' },
  { label: 'Features', id: 'features' },
  { label: 'Contact', id: 'footer' },
];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => (
  <AppBar position="fixed" color="inherit" elevation={1} className={styles.header}>
    <Toolbar className={styles.header__toolbar}>
      <Box className={styles.header__logo}>
        <img src={logo} alt="Farmwise Logo" className={styles.header__logo} />
      </Box>
     
      <nav className={styles.header__nav}>
        {navItems.map((item) => (
          <Button
            key={item.id}
            color="primary"
            className={styles.header__navItem}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    </Toolbar>
  </AppBar>
);

export default Header; 
import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <Box component="footer" className={styles.footer}>
    <Typography variant="body2" className={styles.footer__copyright}>
      FarmWise &copy; {new Date().getFullYear()} | Contact: info@farmwise.co.in | +91 8898583879
    </Typography>
  </Box>
);

export default Footer; 
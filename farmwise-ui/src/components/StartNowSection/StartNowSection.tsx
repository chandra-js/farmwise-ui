import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './StartNowSection.module.scss';

const StartNowSection: React.FC = () => (
  <Box id="start-now" className={styles.startNowSection}>
    <Typography variant="h5" className={styles.startNowSection__title} gutterBottom>
      Ready to Transform Your Farming?
    </Typography>
    <Typography variant="subtitle1" className={styles.startNowSection__subtitle}>
      Join thousands of farmers already benefiting from expert guidance
    </Typography>
    <Button variant="contained" color="primary" size="large" className={styles.startNowSection__cta}>
      Get Started Now
    </Button>
  </Box>
);

export default StartNowSection; 
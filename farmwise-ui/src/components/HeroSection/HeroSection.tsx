import React from 'react';
import { Box, Typography, Button, Stack, Grid, Paper } from '@mui/material';
import heroImg from '../../assets/img.png';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
  <Box id="hero" className={styles.heroSection}>
    <Grid container spacing={4} alignItems="center" justifyContent="center" className={styles.heroSection__grid}>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" component="h1" className={styles.heroSection__title} gutterBottom>
          Empowering Farmers with Expert Agricultural Guidance
        </Typography>
        <Typography variant="subtitle1" className={styles.heroSection__subtitle} paragraph>
          Access personalized agricultural consultation in Bengali, Hindi, and English. Connect with experts, get real-time advice, and improve your crop yield.
        </Typography>
        <Stack direction="row" spacing={2} className={styles.heroSection__cta}>
          <Button variant="contained" color="primary" size="large">
            Start Consultation
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} >
        <div className={styles.heroSection__imageWrapper}>
          <img src={heroImg} alt="Farmer using mobile" className={styles.heroSection__image} />
        </div>
      </Grid>
    </Grid>
  </Box>
);

export default HeroSection; 
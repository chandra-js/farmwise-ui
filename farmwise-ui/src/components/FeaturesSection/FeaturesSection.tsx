import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFeatures } from '../../store/constantsSlice';
import styles from './FeaturesSection.module.scss';
import { features as featuresData } from '../constants';

const FeaturesSection: React.FC = () => {
  type Feature = typeof featuresData[number];
  const features = useSelector(selectFeatures);
  return (
    <Box id="features" className={styles.featuresSection}>
      <Typography variant="h4" className={styles.featuresSection__title} gutterBottom>
        Core Features
      </Typography>
      <Divider className={styles.featuresSection__divider} />
      <Grid container spacing={3} justifyContent="center">
        {features.map((item: Feature, idx: number) => (
          <Grid item xs={12} sm={4} md={4} className={styles.featuresSection__gridItem} key={idx}>
            <Paper elevation={2} className={styles.featuresSection__card}>
              <Stack alignItems="center" spacing={1}>
                {item.icon}
                <Typography variant="h6" fontWeight={600} gutterBottom>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection; 
import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectVisionItems } from '../../store/constantsSlice';
import styles from './VisionSection.module.scss';

const VisionSection: React.FC = () => {
  const visionItems = useSelector(selectVisionItems);
  return (
    <Box id="vision" className={styles.visionSection}>
      <Typography variant="h4" className={styles.visionSection__title} gutterBottom>
        Our Vision
      </Typography>
      <Divider className={styles.visionSection__divider} />
      <Grid container spacing={3} justifyContent="center">
        {visionItems.map((item: any, idx: number) => (
          <Grid item xs={12} sm={6} md={3} key={idx} className={styles.visionSection__gridItem}>
            <Paper elevation={2} className={styles.visionSection__card}>
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

export default VisionSection; 
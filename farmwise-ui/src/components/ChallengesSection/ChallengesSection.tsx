import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectChallenges } from '../../store/constantsSlice';
import styles from './ChallengesSection.module.scss';

const ChallengesSection: React.FC = () => {
  const challenges = useSelector(selectChallenges);
  return (
    <Box id="challenges" className={styles.challengesSection}>
      <Typography variant="h4" className={styles.challengesSection__title} gutterBottom>
        Challenges We&apos;re Solving
      </Typography>
      <Divider className={styles.challengesSection__divider} />
      <Grid container spacing={3} justifyContent="center">
        {challenges.map((item: any, idx: number) => (
          <Grid item xs={12} sm={6} md={3} key={idx} className={styles.challengesSection__gridItem}>
            <Paper elevation={2} className={styles.challengesSection__card}>
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

export default ChallengesSection; 
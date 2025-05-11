import React from 'react';
import { Box, Typography, Grid, Paper, Divider, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSolutions } from '../../store/constantsSlice';
import solutionImg from '../../assets/solution.png';
import styles from './SolutionSection.module.scss';

const SolutionSection: React.FC = () => {
  const solutions = useSelector(selectSolutions);
  return (
    <Box id="solution" className={styles.solutionSection}>
      <Typography variant="h4" className={styles.solutionSection__title} gutterBottom>
        Our Solution
      </Typography>
      <Divider className={styles.solutionSection__divider} />
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <List className={styles.solutionSection__list}>
            {solutions.map((item: any, idx: number) => (
              <ListItem key={idx} alignItems="flex-start">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h6" fontWeight={600}>{item.title}</Typography>}
                  secondary={<Typography variant="body2" color="text.secondary">{item.desc}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.solutionSection__imageWrapper}>
            <img src={solutionImg} alt="App mockup" className={styles.solutionSection__image} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SolutionSection;

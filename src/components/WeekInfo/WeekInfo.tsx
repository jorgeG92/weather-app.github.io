import { Grid } from '@mui/material';
import { FC } from 'react';
import WeekInfoItem from './WeekInfoItem';

const WeekInfo: FC = () => (
  <Grid container spacing={2} justifyContent={'space-between'}>
    <Grid item md={2} xs={6}>
      <WeekInfoItem> Dia 1</WeekInfoItem>
    </Grid>
    <Grid item md={2} xs={6}>
      <WeekInfoItem> Dia 1</WeekInfoItem>
    </Grid>
    <Grid item md={2} xs={6}>
      <WeekInfoItem> Dia 1</WeekInfoItem>
    </Grid>
    <Grid item md={2} xs={6}>
      <WeekInfoItem> Dia 1</WeekInfoItem>
    </Grid>
    <Grid item md={2} xs={6}>
      <WeekInfoItem> Dia 1</WeekInfoItem>
    </Grid>
    <Grid item md={2} xs={6}>
      <WeekInfoItem> Dia 1</WeekInfoItem>
    </Grid>
  </Grid>
);

export default WeekInfo;

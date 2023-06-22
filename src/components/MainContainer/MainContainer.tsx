import styled from '@emotion/styled';
import { Divider, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchWeatherInfo } from '../../store/weather';
import CurrentDayInfo from '../CurrentDayInfo';
import TopBar from '../TopBar/TopBar';
import WeekInfo from '../WeekInfo/WeekInfo';

const Container = styled('div')({
  padding: 50,
  margin: '0 auto',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const MainContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedLocation } = useSelector(
    (state: RootState) => state.locations
  );

  useEffect(() => {
    // Request weather info when location exist and it has been selected
    if (selectedLocation) {
      dispatch(
        fetchWeatherInfo({
          lat: selectedLocation.lat,
          lon: selectedLocation.lon,
        })
      );
    }
  }, [dispatch, selectedLocation]);

  return (
    <>
      <TopBar />
      <Container>
        {!selectedLocation ? (
          <Typography>Busca y selecciona una ubicación</Typography>
        ) : (
          <>
            <CurrentDayInfo />
            <Divider flexItem color="white" sx={{ marginY: 5 }} />
            <WeekInfo />
          </>
        )}
      </Container>
    </>
  );
};
export default MainContainer;

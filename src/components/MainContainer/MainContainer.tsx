import styled from '@emotion/styled';
import { Divider, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchWeatherInfo } from '../../store/weather';
import CurrentDayInfo from '../CurrentDayInfo';
import TopBar from '../TopBar/TopBar';
import WeekInfo from '../WeekInfo/WeekInfo';
import CitiesList from '../CitiesList/CitiesList';
import AddCityButton from '../CitiesList/AddCityButton/AddCityButton';

const Container = styled('div')({
  padding: 50,
  margin: '0 auto',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const SectionDivider: FC = () => (
  <Divider flexItem color="white" sx={{ marginY: 2 }} />
);

const MainContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedLocation } = useSelector(
    (state: RootState) => state.locations
  );
  const { todayInfo, nextDays } = useSelector(
    (state: RootState) => state.weather
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
        <Typography variant="h5" sx={{ marginBottom: 1 }}>
          Ubicaciones guardadas
        </Typography>
        <CitiesList />
        <SectionDivider />
        {!selectedLocation || !todayInfo || nextDays.length === 0 ? (
          <Typography>Busca y selecciona una ubicación</Typography>
        ) : (
          <>
            <CurrentDayInfo />
            <SectionDivider />
            <WeekInfo />
            <SectionDivider />
            <AddCityButton />
          </>
        )}
      </Container>
    </>
  );
};
export default MainContainer;

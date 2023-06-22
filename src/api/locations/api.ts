import axios from 'axios';

const GECODE_URL = 'https://geocode.maps.co/';
// https://geocode.maps.co/search?q=%7BTres%20Cantos%7D

export type GECODE_Location = {
  place_id: number;
  lat: number;
  lon: number;
  display_name: string;
};

const parseData = (location: GECODE_Location): GECODE_Location => {
  const placesArray = location.display_name.split(', ');
  const parse_name = [placesArray[0], placesArray.slice(-2)].join(', ');
  return {
    place_id: location.place_id,
    lat: location.lat,
    lon: location.lon,
    display_name: parse_name,
  };
};

const getLocationsByString = async (value: string) => {
  try {
    const response = await axios.get(
      GECODE_URL + '/search?city={' + value + '}'
    );
    // console.log('En la api', response.data);
    return response.data.map((item: GECODE_Location) => parseData(item));
  } catch (e) {
    throw e;
  }
};

export { getLocationsByString, parseData };

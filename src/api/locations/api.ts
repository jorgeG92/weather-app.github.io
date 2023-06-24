import axios, { AxiosResponse } from 'axios';

export type GECODE_Location = {
  place_id: number;
  lat: number;
  lon: number;
  display_name: string;
};

const parseData = (locationName: GECODE_Location['display_name']): string => {
  const placesArray = locationName.split(', ');
  return [placesArray[0], placesArray.slice(-2)].join(', ');
};

const locationsApi = axios.create({
  baseURL: 'https://geocode.maps.co/search',
});

const getLocationsByString = async (
  value: string
): Promise<GECODE_Location[]> => {
  try {
    const response = await locationsApi.request<
      any,
      AxiosResponse<GECODE_Location[]>
    >({
      params: {
        city: value,
      },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
};

export { getLocationsByString, parseData };

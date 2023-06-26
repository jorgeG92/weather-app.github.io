import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getLocationsByString, GECODE_Location } from '../../api/locations';

const SLICE_NAME = 'locations' as const;

const fetchLocations = createAsyncThunk(
  SLICE_NAME + '/fetchLocations',
  async (searchString: string) => {
    try {
      const response = await getLocationsByString(searchString);
      return response;
    } catch (error) {
      console.log('throw error');
      throw error;
    }
  }
);

/* definir tipo de para la localización*/

type LocationState = {
  loading: boolean;
  selectedLocation: GECODE_Location | undefined;
  locations: GECODE_Location[];
};
const initialState: LocationState = {
  loading: false,
  selectedLocation: undefined,
  locations: [],
};

const {
  actions: { setLocation },
  reducer,
} = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setLocation: (state, { payload }: PayloadAction<GECODE_Location>) => ({
      ...state,
      selectedLocation: payload,
    }),
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLocations.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      // Add locations for suggestion on AutoComplete from Toolbar
      state.locations = action.payload as GECODE_Location[];
      state.loading = false;
    });
    builder.addCase(fetchLocations.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
    });
  },
});

export { setLocation, fetchLocations };
export default reducer;

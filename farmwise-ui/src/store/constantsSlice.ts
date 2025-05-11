import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { visionItems, challenges, solutions, features } from '../components/constants';

export interface ConstantsState {
  visionItems: typeof visionItems;
  challenges: typeof challenges;
  solutions: typeof solutions;
  features: typeof features;
  loading: boolean;
}

const initialState: ConstantsState = {
  visionItems,
  challenges,
  solutions,
  features,
  loading: false,
};

export const fetchConstants = createAsyncThunk('constants/fetchConstants', async () => {
  // Simulate async fetch
  return new Promise<typeof initialState>((resolve) => {
    setTimeout(() => {
      resolve({ ...initialState });
    }, 1000);
  });
});

const constantsSlice = createSlice({
  name: 'constants',
  initialState,
  reducers: {
    setConstants(state, action: PayloadAction<Partial<ConstantsState>>) {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConstants.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConstants.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchConstants.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setConstants } = constantsSlice.actions;

export const selectVisionItems = (state: { constants: ConstantsState }) => state.constants.visionItems;
export const selectChallenges = (state: { constants: ConstantsState }) => state.constants.challenges;
export const selectSolutions = (state: { constants: ConstantsState }) => state.constants.solutions;
export const selectFeatures = (state: { constants: ConstantsState }) => state.constants.features;
export const selectConstantsLoading = (state: { constants: ConstantsState }) => state.constants.loading;

export default constantsSlice.reducer; 
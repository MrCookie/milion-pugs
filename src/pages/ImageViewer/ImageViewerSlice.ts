import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

type ImageViewerState = {
  visitedDates: string[];
};

const initialState: ImageViewerState = {
  visitedDates: [],
};

export const imageViewerSlice = createSlice({
  name: 'imageViewer',
  initialState,
  reducers: {
    addVisitedDate: (state, action: PayloadAction<string>) => {
      state.visitedDates.push(action.payload);
    },
  },
});
export const { addVisitedDate } = imageViewerSlice.actions;

export const visitedDatesSelector = (state: RootState) =>
  state.imageViewer.visitedDates;

export default imageViewerSlice.reducer;

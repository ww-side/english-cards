import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarsState {
  itemsPerPage: number;
  currentPage: number;
}

const initialState: CarsState = {
  currentPage: 1,
  itemsPerPage: 4,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export default paginationSlice.reducer;

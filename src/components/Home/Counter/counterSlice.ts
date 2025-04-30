import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.count += 1;
    },
    decrementCounter: (state) => {
      state.count -= 1;
    },
    resetCounter: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;
export default counterSlice.reducer;

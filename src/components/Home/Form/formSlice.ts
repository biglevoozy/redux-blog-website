import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormState {
  title: string;
  body: string;
  userId: string;
}

const initialState: FormState = {
  title: '',
  body: '',
  userId: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    handleFormChange: (
      state: FormState,
      action: PayloadAction<{ key: keyof FormState; value: string }>,
    ) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    handleResetForm: () => initialState,
  },
});

export const { handleFormChange, handleResetForm } = formSlice.actions;
export default formSlice.reducer;

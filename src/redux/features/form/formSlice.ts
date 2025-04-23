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
    handleTitleChange: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    handleBodyChange: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    handleUserIdChange: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    handleResetForm: (state) => {
      state.title = initialState.title;
      state.body = initialState.body;
      state.userId = initialState.userId;
    },
  },
});

export const {
  handleTitleChange,
  handleBodyChange,
  handleUserIdChange,
  handleResetForm,
} = formSlice.actions;
export default formSlice.reducer;

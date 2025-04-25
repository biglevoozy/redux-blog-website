import { Dispatch, PayloadAction } from '@reduxjs/toolkit';

export const logger = () => (next: Dispatch) => (action: PayloadAction) => {
  console.log(action.type);

  const result = next(action);

  return result;
};

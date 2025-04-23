import { Dispatch, PayloadAction } from '@reduxjs/toolkit';

export function actionLogger() {
  return (next: Dispatch) => {
    return (action: PayloadAction) => {
      console.log(action.type);
      const result = next(action);

      return result;
    };
  };
}

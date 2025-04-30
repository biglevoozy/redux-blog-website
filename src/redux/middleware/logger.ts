import { Dispatch, Middleware, PayloadAction } from '@reduxjs/toolkit';

const logger = () => (next: Dispatch) => (action: PayloadAction) => {
  console.log(action.type);

  const result = next(action);

  return result;
};

export default logger as Middleware;

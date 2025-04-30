import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/components/Home/Counter/counterSlice';
import formReducer from 'src/components/Home/Form/formSlice';
import postsReducer from 'src/components/Home/Posts/postsSlice';
import logger from 'src/redux/middleware/logger';

export const RootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  form: formReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store;

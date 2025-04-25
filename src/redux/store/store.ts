import { Middleware, configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/components/Home/Counter/counterSlice';
import formReducer from 'src/components/Home/Form/formSlice';
import postsReducer from 'src/components/Home/Posts/postsSlice';
import { logger } from 'src/redux/middleware/logger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store;

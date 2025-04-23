import { Middleware, configureStore } from '@reduxjs/toolkit';
import counterReducer from 'src/redux/features/counter/counterSlice';
import formReducer from 'src/redux/features/form/formSlice';
import postsReducer from 'src/redux/features/posts/postsSlice';
import { actionLogger } from 'src/redux/middleware/actionLogger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(actionLogger as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

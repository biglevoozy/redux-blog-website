import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootReducer } from 'src/redux/store/store';
import { userAPI } from 'src/services/UserService';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    store = configureStore({
      reducer: RootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware),
    }),
    ...renderOptions
  } = {},
) {
  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>, renderOptions),
  };
}

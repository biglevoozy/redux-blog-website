import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store/store';

import Home from './Home';

describe('test Home', () => {
  it('should properly render Home component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(screen.getByText(/Redux /i)).toBeInTheDocument();
  });
});

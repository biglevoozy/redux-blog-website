import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store/store';

import Counter from './Counter';

describe('test Counter', () => {
  it('should render Counter properly', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
  });

  it('should properly increment, decrement and reset counter state', async () => {
    const user = userEvent.setup();

    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );

    const btnIncrement = getByText('Increment');
    const btnDecrement = getByText('Decrement');
    const btnReset = getByText('Reset');

    expect(getByText(/Counter: 0/i)).toBeInTheDocument();

    await user.click(btnIncrement);
    expect(getByText(/Counter: 1/i)).toBeInTheDocument();

    await user.click(btnReset);
    expect(getByText(/Counter: 0/i)).toBeInTheDocument();

    await user.click(btnDecrement);
    expect(getByText(/Counter: -1/i)).toBeInTheDocument();
  });
});

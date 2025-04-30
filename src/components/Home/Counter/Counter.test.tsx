import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'src/tests/utils/renderWIthProviders';

import Counter from './Counter';

describe('test Counter', () => {
  it('should render Counter properly', () => {
    const { getByText } = renderWithProviders(<Counter />);

    expect(getByText(/Counter:/i)).toBeInTheDocument();
  });

  it('should properly increment, decrement and reset counter state', async () => {
    const user = userEvent.setup();

    const { getByText } = renderWithProviders(<Counter />);

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

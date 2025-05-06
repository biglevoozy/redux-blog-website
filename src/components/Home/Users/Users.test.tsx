import { renderWithProviders } from 'src/tests/utils/renderWIthProviders';

import Users from './Users';

describe('users component test', () => {
  it('should render users', () => {
    const { getByTestId } = renderWithProviders(<Users />);

    expect(getByTestId('usersList')).toBeInTheDocument();
  });
});

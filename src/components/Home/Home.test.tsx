import { renderWithProviders } from 'src/tests/utils/renderWIthProviders';

import Home from './Home';

describe('test Home', () => {
  it('should properly render Home component', () => {
    const { getByText } = renderWithProviders(<Home />);

    expect(getByText('Blog Website')).toBeInTheDocument();
  });
});

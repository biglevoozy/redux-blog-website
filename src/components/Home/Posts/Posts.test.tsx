import { renderWithProviders } from 'src/tests/utils/renderWIthProviders';

import Posts from './Posts';

describe('test Posts', () => {
  it('should render Posts properly', () => {
    const { getByTestId } = renderWithProviders(<Posts />);

    expect(getByTestId('posts-div')).toBeInTheDocument();
  });
});

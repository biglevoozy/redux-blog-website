import { render } from '@testing-library/react';

import User from './User';

describe('user component', () => {
  it('should render user', () => {
    const { getByText } = render(<User name="John" />);

    expect(getByText('John')).toBeInTheDocument();
  });
});

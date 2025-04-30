import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('test Spinner', () => {
  it('should render Spinner on the screen', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});

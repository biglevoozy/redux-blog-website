import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('test Heading', () => {
  it('should render Heading with defined Props', () => {
    render(<Heading>Heading</Heading>);

    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
});

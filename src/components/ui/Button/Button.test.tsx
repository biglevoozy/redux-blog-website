import { render, screen } from '@testing-library/react';

import Button from './Button';

const onClick = jest.fn();

describe('test Button', () => {
  it('should render Button with provided props', () => {
    render(<Button onClick={onClick} placeholder="Placeholder" />);

    expect(screen.getByText('Placeholder')).toBeInTheDocument;
  });
});

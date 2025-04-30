import { render, screen } from '@testing-library/react';

import Input from './Input';

const onChange = jest.fn();

describe('test Input', () => {
  it('should render Input with defined props', () => {
    render(
      <Input id="i-1" placeholder="Input" onChange={onChange} value="1" />,
    );

    const input = screen.getByDisplayValue('1');

    expect(input).toBeInTheDocument();
  });
});

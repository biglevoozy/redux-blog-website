import { render, screen } from '@testing-library/react';

import Textarea from './Textarea';

const onChange = jest.fn();

describe('test Textarea', () => {
  it('should render Textarea', () => {
    render(
      <Textarea
        id="i-1"
        onChange={onChange}
        placeholder="Textarea"
        value="1"
      />,
    );

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });
});

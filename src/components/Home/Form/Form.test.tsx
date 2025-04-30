import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'src/tests/utils/renderWIthProviders';

import Form from './Form';

describe('test Form', () => {
  it('should properly render a Form', () => {
    const { getByText } = renderWithProviders(<Form />);

    expect(getByText('Add your post')).toBeInTheDocument();
  });

  it('should properly handle user input changes', async () => {
    const user = userEvent.setup();

    const { getByPlaceholderText, getByText } = renderWithProviders(<Form />);

    const inputUserId = getByPlaceholderText(/Your id:/i);
    const inputTitle = getByPlaceholderText(/Title of your post:/i);
    const textareaBody = getByPlaceholderText(/Content of your post:/i);
    const submitBtn = getByText('Add post');

    await user.type(inputUserId, '2');
    expect(inputUserId).toHaveValue(2);

    await user.type(inputTitle, 'title');
    expect(inputTitle).toHaveValue('title');

    await user.type(textareaBody, 'body');
    expect(textareaBody).toHaveValue('body');

    await user.click(submitBtn);
    expect(textareaBody).toHaveValue('');
    expect(inputTitle).toHaveValue('');
    expect(inputUserId).toHaveValue(null);
  });
});

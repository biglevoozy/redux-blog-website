import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store/store';

import Form from './Form';

describe('test Form', () => {
  it('should properly render a Form', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    expect(screen.getByText('Add your post')).toBeInTheDocument();
  });

  it('should properly handle user input changes', async () => {
    const user = userEvent.setup();

    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

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

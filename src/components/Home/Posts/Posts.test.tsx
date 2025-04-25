import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store/store';

import Posts from './Posts';

describe('test Posts', () => {
  it('should render Posts properly', () => {
    render(
      <Provider store={store}>
        <Posts />
      </Provider>,
    );

    expect(screen.getByTestId('posts-div')).toBeInTheDocument();
  });
});

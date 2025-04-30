import { render, screen } from '@testing-library/react';
import { IPost } from 'src/types/post.interface';

import PostList from './PostList';

const mockPost = [{ body: 'body', title: 'title', userId: 1, id: 2 }];
const initialPostsArray: IPost[] = [];

describe('test PostList', () => {
  it('should properly test PostList', () => {
    const { getByText } = render(
      <PostList posts={mockPost} status="idle" error={null} heading="Test" />,
    );

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
    expect(getByText(/body/i)).toBeInTheDocument();
  });

  it('should render Spinner and not render posts', () => {
    const { getByTestId } = render(
      <PostList
        posts={initialPostsArray}
        status="pending"
        error={null}
        heading="Test"
      />,
    );

    expect(getByTestId('spinner')).toBeInTheDocument();
  });
  it('should render Spinner and not render posts', () => {
    const { getByText, queryByTestId } = render(
      <PostList
        posts={initialPostsArray}
        status="fulfilled"
        error={null}
        heading="Test"
      />,
    );

    expect(getByText(/Uploaded/i)).toBeInTheDocument();
    expect(queryByTestId('spinner')).not.toBeInTheDocument();
  });
});

import { IPost } from 'src/types/post.interface';

import postsReducer, { PostsState, addPost, fetchPosts } from './postsSlice';

global.fetch = jest.fn();

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

const mockExistingPosts: IPost[] = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 2,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
];

const mockSentPost: IPost = {
  userId: '1',
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const mockReturnedPost: IPost = {
  id: 1,
  userId: '1',
  title:
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

describe('postsSlice/fetchPosts.responses', () => {
  it('should fetchPosts with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockExistingPosts),
    });

    const dispatch = jest.fn();
    const thunk = fetchPosts();

    await (thunk as jest.Mock)(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [_, end] = calls;

    expect(end[0].payload).toBe(mockExistingPosts);
  });

  it('should fetchPosts with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = fetchPosts();

    await (thunk as jest.Mock)(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe('posts/fetchPosts/pending');
    expect(end[0].type).toBe('posts/fetchPosts/rejected');
    expect(end[0].payload).toBe('Failed to fetch posts');
  });

  it('should change status with "fetchPosts.pending" action', () => {
    const state = postsReducer(initialState, { type: fetchPosts.pending.type });
    expect(state.status).toBe('pending');
  });

  it('should change status with "fetchPosts.fulfilled" action', () => {
    const state = postsReducer(
      initialState,
      fetchPosts.fulfilled(mockExistingPosts, ''),
    );
    expect(state).toEqual({
      posts: mockExistingPosts,
      status: 'fulfilled',
      error: null,
    });
  });

  it('should change status with "fetchPosts.rejected" action', () => {
    const action = {
      type: fetchPosts.rejected.type,
      payload: 'Failed to fetch posts',
    };
    const state = postsReducer(initialState, action);
    expect(state).toEqual({
      posts: [],
      status: 'rejected',
      error: 'Failed to fetch posts',
    });
  });

  it('should add post with resolved response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockReturnedPost,
    });

    const dispatch = jest.fn();
    const thunk = addPost(mockSentPost);

    await (thunk as jest.Mock)(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe('posts/addPost/pending');
    expect(end[0].type).toBe('posts/addPost/fulfilled');
    expect(end[0].payload).toBe(mockReturnedPost);
  });

  it('should fetchPosts with rejected response', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const dispatch = jest.fn();
    const thunk = addPost(mockSentPost);

    await (thunk as jest.Mock)(dispatch);

    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe('posts/addPost/pending');
    expect(end[0].type).toBe('posts/addPost/rejected');
    expect(end[0].payload).toBe('something is wrong');
  });

  it('should change status with "addPost.pending" action', () => {
    const state = postsReducer(initialState, { type: addPost.pending.type });
    expect(state.status).toBe('pending');
  });

  it('should change status with "addPost.fulfilled" action', () => {
    const state = postsReducer(initialState, {
      type: addPost.fulfilled.type,
      payload: mockExistingPosts,
    });

    expect(state).toEqual({
      posts: [...initialState.posts, mockExistingPosts],
      status: 'fulfilled',
      error: null,
    });
  });

  it('should change status with "addPost.rejected" action', () => {
    const action = {
      type: addPost.rejected.type,
      payload: 'something is wrong',
    };
    const state = postsReducer(initialState, action);
    expect(state).toEqual({
      posts: [],
      status: 'rejected',
      error: 'something is wrong',
    });
  });
});

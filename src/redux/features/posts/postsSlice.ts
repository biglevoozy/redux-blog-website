import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPost } from 'src/types/post.interface';

import { BASE_URL } from '../../../config/url.config';

export interface PostsState {
  posts: IPost[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      });

    builder
      .addCase(addPost.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as string;
      });
  },
});

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) throw new Error('Failed to fetch posts');

      const data = await response.json();

      return data;
    } catch (e: unknown) {
      if (typeof e === 'string') {
        return rejectWithValue(e);
      } else if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  },
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ title, body, userId }: IPost, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) throw new Error('something is wrong');

      const data = await response.json();
      return data;
    } catch (e: unknown) {
      if (typeof e === 'string') {
        return rejectWithValue(e);
      } else if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  },
);

export default postsSlice.reducer;

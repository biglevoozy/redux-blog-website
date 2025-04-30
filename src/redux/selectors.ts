import { createSelector } from '@reduxjs/toolkit';
import { IPost } from 'src/types/post.interface';

import { RootState } from './store/store';

const getCounterSelectorRoot = (state: RootState) => state.counter;
export const counterSelector = createSelector(
  [getCounterSelectorRoot],
  (root) => root.count,
);

export const getFormSelectorRoot = (state: RootState) => state.form;

export const getPostsSelectorRoot = (state: RootState) => state.posts;
export const longTitlePostsSelector = createSelector(
  [getPostsSelectorRoot],
  (root) => root.posts.filter((post: IPost) => post.title.length > 20),
);

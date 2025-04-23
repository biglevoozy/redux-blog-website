import { createSelector } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { fetchPosts } from 'src/redux/features/posts/postsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { IPost } from 'src/types/post.interface';

import PostList from './PostList/PostList';

import styles from './Posts.module.css';

const Posts = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  const dispatch = useAppDispatch();

  const filterSelector = createSelector(
    (state) => state.posts.posts,
    (posts) => posts.filter((post: IPost) => post.title.length > 20),
  );

  const filteredPosts = useAppSelector(filterSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <PostList
        heading="All posts: "
        posts={posts}
        status={status}
        error={error}
      />

      <PostList
        heading="Posts with the title length longer than 20 chars: "
        posts={filteredPosts}
        status={status}
        error={error}
      />
    </div>
  );
};

export default Posts;

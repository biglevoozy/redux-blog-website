import { useEffect } from 'react';
import { fetchPosts } from 'src/components/Home/Posts/postsSlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  getPostsSelectorRoot,
  longTitlePostsSelector,
} from 'src/redux/selectors';

import PostList from './PostList/PostList';

import styles from './Posts.module.css';

const Posts = () => {
  const { posts, status, error } = useAppSelector(getPostsSelectorRoot);

  const dispatch = useAppDispatch();

  const filteredPosts = useAppSelector(longTitlePostsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div data-testid="posts-div" className={styles.wrapper}>
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

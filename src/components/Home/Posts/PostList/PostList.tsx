import Heading from 'src/components/ui/Heading/Heading';
import Spinner from 'src/components/ui/Spinner/Spinner';
import { IPost } from 'src/types/post.interface';

import Post from './Post/Post';

import styles from './PostList.module.css';

interface PostListProps {
  posts: IPost[];
  status: string;
  error: string | null;
  heading: string;
}

const PostList = ({ posts, status, error, heading }: PostListProps) => {
  return (
    <>
      <div className={styles.header}>
        <Heading>{heading}</Heading>

        <span className={styles.status}>
          {status === 'fulfilled' ? (
            'Uploaded!'
          ) : status === 'pending' ? (
            <Spinner />
          ) : (
            `Rejected with error: ${error}`
          )}
        </span>
      </div>
      <ul className={styles.postList}>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => (
            <Post
              body={post.body}
              title={post.title}
              userId={post.userId}
              key={post.id}
            />
          ))}
      </ul>
    </>
  );
};

export default PostList;

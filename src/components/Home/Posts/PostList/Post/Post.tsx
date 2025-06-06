import styles from './Post.module.css';

interface PostProps {
  title: string;
  userId: string | number;
  body: string;
}

const Post = ({ title, userId, body }: PostProps) => {
  return (
    <li className={styles.post}>
      <div className={styles.postCredentials}>
        <span className={styles.title}>{title}</span>
        <span className={styles.author}>posted by user {userId}</span>
      </div>
      <p className={styles.content}>{body}</p>
    </li>
  );
};

export default Post;

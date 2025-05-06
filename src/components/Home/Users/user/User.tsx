import styles from './User.module.css';

interface UserProps {
  name: string;
  photoUrl?: string;
}

const User = ({ name, photoUrl }: UserProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={photoUrl || 'user.png'} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default User;

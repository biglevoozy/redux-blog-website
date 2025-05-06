import styles from './NavigationMenu.module.css';

const NavigationMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#header">Home</a>
        </li>
        <li className={styles.item}>
          <a href="#posts">Posts</a>
        </li>
        <li className={styles.item}>
          <a href="#users">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;

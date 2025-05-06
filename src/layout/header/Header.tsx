import Heading from 'src/components/ui/Heading/Heading';

import NavigationMenu from './NavigationMenu/NavigationMenu';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Heading>Blog Website</Heading>
      <NavigationMenu />
    </header>
  );
};

export default Header;

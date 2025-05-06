import { PropsWithChildren } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

import styles from './Layout.module.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

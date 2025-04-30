import { PropsWithChildren } from 'react';

import styles from './Heading.module.css';

const Heading = ({ children }: PropsWithChildren) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;

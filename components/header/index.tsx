import Logo from '../logo';

import styles from './header.module.css';

export default function Header () {
  const logo = <Logo />;

  const top = (
    <div className={styles.top}>
      {logo}
    </div>
  );

  const sidebar = <div className={styles.sidebar} />;

  return (
    <header className={styles.header}>
      {top}
      {sidebar}
    </header>
  );
}

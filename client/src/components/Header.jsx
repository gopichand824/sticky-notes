import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>Sticky Notes</h2>
      </div>
    </header>
  );
};

export default Header;
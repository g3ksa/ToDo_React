import React from 'react';

import styles from './header.module.scss';

export const Header = () => {
   return (
      <header className={styles.header}>
         <h1>Your ToDo List</h1>
      </header>
   );
};

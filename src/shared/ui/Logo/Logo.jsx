import sprite from 'shared/assets/images/svg/sprite.svg';

import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <a href='/' className={styles.logoHeader} aria-label='Главная страница'>
      <svg className={styles.logo} aria-hidden='true'>
        <use href={`${sprite}#logo-desktop`} className={styles.desktop} />
        <use href={`${sprite}#logo-mobile`} className={styles.mobile} />
      </svg>
    </a>
  );
};

import { CityCard } from 'shared/ui';
import { CardList } from 'widgets';

import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main>
      <section className={styles.weatherToday}>
        <h1 className='visually-hidden'>Актуальная погода</h1>
        <CityCard />
        <CardList />
      </section>
    </main>
  );
};

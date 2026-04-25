import { CardList, CityCard } from 'shared/ui';
import { Slider } from 'widgets';

import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <main>
      <h1 className='visually-hidden'>Погода в вашем городе</h1>
      <section className={styles.weatherToday}>
        <h2 className='visually-hidden'>Актуальная погода</h2>
        <CityCard />
        <CardList />
      </section>
      <section className={styles.weatherWidget}>
        <h2 className='visually-hidden'>Прогноз погоды</h2>
        <Slider />
      </section>
    </main>
  );
};

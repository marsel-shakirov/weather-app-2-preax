import { CardList } from './CardList/CardList';
import { CityCard } from './CityCard/CityCard';

import styles from './WeatherPanel.module.css';

export const WeatherPanel = () => {
  return (
    <section className={styles.weatherToday}>
      <h2 className='visually-hidden'>Актуальная погода</h2>
      <CityCard />
      <CardList />
    </section>
  );
};

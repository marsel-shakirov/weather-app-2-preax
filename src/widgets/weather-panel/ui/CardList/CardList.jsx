import weatherCards from 'shared/api/mocks/weather-cards.json';

import { Card } from '../Card/Card';

import styles from './CardList.module.css';

export const CardList = () => {
  return (
    <ul className={styles.cardsWrapper}>
      {weatherCards.map((card, index) => {
        return <Card key={`${card.icon}_${index}`} {...card} />;
      })}
    </ul>
  );
};

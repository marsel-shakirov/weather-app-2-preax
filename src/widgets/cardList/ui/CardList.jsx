import { weatherData } from 'shared/api';

import { Card } from 'shared/ui';

import styles from './CardList.module.css';

export const CardList = () => {
  return (
    <ul className={styles.cardsWrapper}>
      {weatherData.map((card, index) => {
        return <Card key={`${card.icon}_${index}`} {...card} />;
      })}
    </ul>
  );
};

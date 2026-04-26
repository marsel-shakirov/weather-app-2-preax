import styles from './SliderList.module.css';

import { getForecastData } from '../../model/forecastData';

import { SliderCard } from '../SliderCard/SliderCard';

import { Icon } from 'shared/ui';

export const SliderList = ({ range }) => {
  const forecastData = getForecastData(range);

  return (
    <div className={styles.forecastContent}>
      <button className={styles.forecastBtn} aria-label='Предыдущий слайд' disabled>
        <Icon name='chevron' />
      </button>
      <div className={styles.forecastWrap}>
        <ul className={styles.forecastList}>
          {forecastData.map((item, index) => {
            return <SliderCard key={`${item.datetime}-${index}`} {...item} />;
          })}
        </ul>
      </div>
      <button className={styles.forecastBtn} aria-label='Следующий слайд'>
        <Icon name='chevron' />
      </button>
    </div>
  );
};

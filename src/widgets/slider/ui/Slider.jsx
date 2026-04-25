import sliderCard24h from 'shared/api/mocks/slider-for-24h.json';
import sliderCard5d from 'shared/api/mocks/slider-for-5days.json';

import { useState } from 'react';

import { clsx } from 'shared/utils';

import { Icon, SliderCard } from 'shared/ui';

import styles from './Slider.module.css';

const options = [
  { value: '24h', label: 'на 24 часа' },
  { value: '5d', label: 'на 5 дней' },
];

export const Slider = () => {
  const [range, setRange] = useState('24h');

  const forecastData = range === '24h' ? sliderCard24h : sliderCard5d;

  const handleChangeRange = (currentRange) => {
    setRange(currentRange);
  };

  return (
    <div className={styles.slider}>
      <fieldset className={styles.sliderMenu}>
        <div className={styles.sliderMenuWrap}>
          <legend className={styles.sliderTitle}>Прогноз:</legend>

          {options.map((opt) => {
            const isActive = range === opt.value;

            return (
              <label key={opt.value} className={clsx(styles, 'forecastTab', isActive && 'active')}>
                <input
                  type='radio'
                  className={`${styles.forecastRadio} visually-hidden`}
                  name='forecast-tab'
                  value={opt.value}
                  checked={isActive}
                  onChange={() => handleChangeRange(opt.value)}
                />
                {opt.label}
              </label>
            );
          })}
        </div>
      </fieldset>

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
    </div>
  );
};

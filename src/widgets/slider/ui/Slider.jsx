import { useState } from 'react';

import { clsx } from 'shared/utils';

import { Icon } from 'shared/ui';
import styles from './Slider.module.css';

const options = [
  { value: '24h', label: 'на 24 часа' },
  { value: '2w', label: 'на 5 дней' },
];

export const Slider = () => {
  const [range, setRange] = useState('24h');

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
        <ul className={styles.forecastList} id='forecast-list-24h'></ul>
        <button className={styles.forecastBtn} aria-label='Следующий слайд'>
          <Icon name='chevron' />
        </button>
      </div>

      {/* <div id='forecast-24h' className={styles.forecastContent}>
        <button
          id='btn-left-24h'
          className={styles.forecastBtn}
          aria-label='Previous 24 hours forecast'
          disabled
        >
          <img
            className={styles.btnIcon}
            src='public/forecast-icon/btn-icon.svg'
            alt='Previous button icon'
            width='24'
            height='24'
          />
        </button>
        <ul className={styles.forecastList} id='forecast-list-24h'></ul>
        <button
          id='btn-right-24h'
          className={styles.forecastBtn}
          aria-label='Next 24 hours forecast'
        >
          <img
            className={styles.btnIcon}
            src='public/forecast-icon/btn-icon.svg'
            alt='Next button icon'
            width='24'
            height='24'
          />
        </button>
      </div>
      <div id='forecast-5days' className={styles.forecastContent}>
        <button
          id='btn-left-5days'
          className={styles.forecastBtn}
          aria-label='Previous 5 days forecast'
        >
          <img
            className={styles.btnIcon}
            src='public/forecast-icon/btn-icon.svg'
            alt='Previous button icon'
            width='24'
            height='24'
          />
        </button>
        <ul className={styles.forecastList} id='forecast-list-5days'></ul>
        <button
          id='btn-right-5days'
          className={styles.forecastBtn}
          aria-label='Next 5 days forecast'
        >
          <img
            className={styles.btnIcon}
            src='public/forecast-icon/btn-icon.svg'
            alt='Next button icon'
            width='24'
            height='24'
          />
        </button>
      </div> */}
    </div>
  );
};

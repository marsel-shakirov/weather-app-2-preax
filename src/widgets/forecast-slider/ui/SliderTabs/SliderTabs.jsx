import styles from './SliderTabs.module.css';

import { clsx } from 'shared/utils';

import { FORECAST_OPTIONS } from '../../model/constants';

export const SliderTabs = ({ range, onChange }) => {
  return (
    <fieldset className={styles.sliderMenu}>
      <div className={styles.sliderMenuWrap}>
        <legend className={styles.sliderTitle}>Прогноз:</legend>

        {FORECAST_OPTIONS.map((opt) => {
          const isActive = range === opt.value;

          return (
            <label key={opt.value} className={clsx(styles, 'forecastTab', isActive && 'active')}>
              <input
                type='radio'
                className={`${styles.forecastRadio} visually-hidden`}
                name='forecast-tab'
                value={opt.value}
                checked={isActive}
                onChange={() => onChange(opt.value)}
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

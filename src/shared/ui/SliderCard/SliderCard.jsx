import styles from './SliderCard.module.css';

import { clsx } from 'shared/utils';

export const SliderCard = ({ datetime, temp, image }) => {
  return (
    <li className={clsx(styles, 'forecastItem', 'flip')}>
      <span className={styles.forecastTime}>{datetime}</span>
      <img
        src={`${process.env.PUBLIC_URL}/static/images/slider-icon/${image}.png`}
        alt=''
        className={styles.forecastIcon}
        width='32'
        height='32'
      />
      <span className={styles.forecastTemp}>{temp}</span>
    </li>
  );
};

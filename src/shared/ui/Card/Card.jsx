import { clsx } from 'shared/utils';

import styles from './Card.module.css';

export const Card = (props) => {
  const { title, icon, value, range, pressure, humidity, param, time } = props;

  const { maskPosition, leftValue } = range || {};

  const getMaskStyle = (position) => ({
    WebkitMaskImage: `radial-gradient(
      circle at ${position},
      transparent 6px,
      rgba(218, 218, 218, 0.4) 6px
    )`,
    maskImage: `radial-gradient(
      circle at ${position},
      transparent 6px,
      rgba(218, 218, 218, 0.4) 6px
    )`,
  });

  const maskStyle = getMaskStyle(maskPosition);

  return (
    <li className={styles.card}>
      <figure className={styles.cardContent}>
        <figcaption className={styles.cardTitle}>{title}</figcaption>

        <img
          src={`${process.env.PUBLIC_URL}/static/images/png/cards-icon/${icon}.png`}
          alt='icon'
          className={styles.cardIcon}
          width='32'
          height='32'
        />
        <span className={styles.cardValue}>{value}</span>
      </figure>

      <div className={styles.cardFooter}>
        {range && (
          <div className={clsx(styles, 'progressBar', { progressBarPressure: pressure })}>
            <div className={styles.progressBarBar} style={maskStyle}></div>
            {leftValue && (
              <span className={styles.progressBarEllipse} style={{ left: `${leftValue}` }}></span>
            )}
          </div>
        )}

        {humidity ? (
          <div className={styles.cardFooterHumidity}>
            <span className={styles.cardFooterFrom}>0%</span>
            <span className={styles.cardFooterTo}>100%</span>
          </div>
        ) : (
          <div>
            <span>
              {param}&nbsp;{time}
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

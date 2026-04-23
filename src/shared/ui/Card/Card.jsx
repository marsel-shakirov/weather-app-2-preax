import { clsx } from 'shared/utils';

import styles from './Card.module.css';

export const Card = (props) => {
  const { title, icon, value, range, pressure, humidity, param, time } = props;

  const percent = 75;

  const progressStyle = {
    '--progress': `${percent}%`,
    '--mask-position': `${percent}%`,
  };

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
          <div className={styles.progressBar} style={progressStyle}>
            <div className={styles.progressBarTrack} />
            <div className={clsx(styles, 'progressBarFill', { pressure })} />
            <span className={styles.progressBarEllipse}></span>
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

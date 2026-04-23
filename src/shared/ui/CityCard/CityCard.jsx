import styles from './CityCard.module.css';

export const CityCard = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoWrapper}>
        <h2 className={styles.location}>Кременчуг-константиновское</h2>
        <time dateTime='2024-01-06' className={styles.day}>
          Суббота, 06 января
        </time>
        <time dateTime='11:29' className={styles.time}>
          11:29
        </time>
      </div>
      <div className={styles.temp}>-7&#176;</div>
      <div className={styles.infoWrapper}>
        <div className={styles.weather}>
          <img
            width='24'
            height='24'
            src={`${process.env.PUBLIC_URL}/static/images/png/weather-icon/cloudy.png`}
            alt=''
            className={styles.weatherIcon}
          />
          <span className={styles.weatherText}>Облачно с прояснениями</span>
        </div>
        <div className={styles.feels}>
          Ощущается как <span className={styles.feelsValue}>-11&#176;</span>
        </div>
      </div>
    </div>
  );
};

import styles from './CityCard.module.css';

export const CityCard = () => {
  return (
    <article className={styles.info}>
      <header className={styles.infoWrapper}>
        <h3 className={styles.location}>Кременчуг-константиновское</h3>
        <time dateTime='2024-01-06' className={styles.day}>
          Суббота, 06 января
        </time>
        <time dateTime='11:29' className={styles.time}>
          11:29
        </time>
      </header>
      <span className={styles.temp}>-7&#176;</span>
      <footer className={styles.infoWrapper}>
        <figure className={styles.weather}>
          <picture>
            <source
              srcSet={`${process.env.PUBLIC_URL}/static/images/weather-icon/cloudy.avif`}
              type='image/avif'
            />
            <source
              srcSet={`${process.env.PUBLIC_URL}/static/images/weather-icon/cloudy.webp`}
              type='image/webp'
            />
            <img
              width='24'
              height='24'
              src={`${process.env.PUBLIC_URL}/static/images/weather-icon/cloudy.png`}
              alt=''
              className={styles.weatherIcon}
            />
          </picture>

          <figcaption className={styles.weatherText}>Облачно с прояснениями</figcaption>
        </figure>
        <span className={styles.feels}>Ощущается как -11&#176;</span>
      </footer>
    </article>
  );
};

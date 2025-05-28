import styles from './CityCard.module.css';

export const CityCard = () => {
	return (
		<div className={styles.info}>
			<div className={styles['dtl-wrapper']}>
				<h3 className={styles.location}>Кременчуг-константиновское</h3>
				<span className={styles.day}>Суббота, 06 января</span>
				<span className={styles.time}>11:29</span>
			</div>
			<div className={styles.temp}>-7&#176;</div>
			<div className={styles.weather}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/weather-icons/04d.png`}
					alt="Weather icon"
					className={styles.icon04d}
				/>
				<span className={styles['weather-text']}>Облачно с прояснениями</span>
			</div>
			<div className={styles.feels}>
				Ощущается как <span className={styles['feels-value']}>-11&#176;</span>
			</div>
		</div>
	);
};

import styles from './Card.module.css';

export const Card = ({
	title,
	icon,
	value,
	range,
	pressure,
	maskPosition,
	leftValue,
	humidity,
	minParams,
	maxParams,
	param,
	time,
}) => {
	return (
		<li className={styles.card}>
			<figure className={styles.cardContent}>
				<figcaption className={styles.cardTitle}>{title}</figcaption>

				<img
					src={`${process.env.PUBLIC_URL}/images/cards-icon/${icon}.svg`}
					alt="icon"
					className={styles.cardIcon}
					width="32"
					height="32"
				/>
				<span className={styles.cardValue}>{value}</span>
			</figure>

			<div className={styles.cardFooter}>
				{range ? (
					<div
						className={`${styles.progressBar} ${
							pressure ? styles.progressBarPressure : ''
						}`}
					>
						<div
							className={styles.progressBarBar}
							style={{
								maskImage: `radialGradient(
									circle at ${maskPosition},
									transparent 6px,
									transparent 6px,
									#d3d3d3 6px,
								)`,
							}}
						></div>
						<span
							className={styles.progressBarEllipse}
							style={{ left: `${leftValue}` }}
						></span>
					</div>
				) : (
					''
				)}
				{humidity ? (
					<div className={styles.cardFooterHumidity}>
						<span className={styles.cardFooterFrom}>{minParams}</span>
						<span className={styles.cardFooterTo}>{maxParams}</span>
					</div>
				) : (
					`${param || ''} ${time || ''}`
				)}
			</div>
		</li>
	);
};

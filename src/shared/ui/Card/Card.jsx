import styles from './Card.module.css';

export const Card = ({
	title,
	icon,
	value,
	range,
	pressure,
	humidity,
	param,
	time,
}) => {
	const { maskPosition, leftValue } = range || {};

	const getMaskStyle = position => ({
		WebkitMaskImage: `radial-gradient(
      circle at ${position},
      transparent 6px,
      rgba(218, 218, 218, 0.4) 6px
    )`,
		maskImage: `radial-gradient(
      circle at ${position},
      transparent 6px,
      rgba(218, 218, 218, 0.4)  6px
    )`,
	});

	const maskStyle = getMaskStyle(maskPosition);

	return (
		<li className={styles.card}>
			<figure className={styles['card-content']}>
				<figcaption className={styles['card-title']}>{title}</figcaption>

				<img
					src={`${process.env.PUBLIC_URL}/assets/images/cards-icon/${icon}.svg`}
					alt="icon"
					className={styles['card-icon']}
					width="32"
					height="32"
				/>
				<span className={styles['card-value']}>{value}</span>
			</figure>

			<div className={styles['card-footer']}>
				{range && (
					<div
						className={`${styles['progress-bar']} ${
							pressure ? styles['progress-bar--pressure'] : ''
						}`}
					>
						<div
							className={styles['progress-bar__bar']}
							style={maskStyle}
						></div>
						{leftValue && (
							<span
								className={styles['progress-bar__ellipse']}
								style={{ left: `${leftValue}` }}
							></span>
						)}
					</div>
				)}

				{humidity ? (
					<div className={styles['card-footer--humidity']}>
						<span className={styles['card-footer__from']}>0%</span>
						<span className={styles['card-footer__to']}>100%</span>
					</div>
				) : (
					(param || '') + (time ? ` ${time}` : '')
				)}
			</div>
		</li>
	);
};

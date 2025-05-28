import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<a href="/" className={styles['header-link']}>
			<picture className={styles['header-picture']}>
				<source
					srcSet={`${process.env.PUBLIC_URL}/assets/images/svg/logo/logo-mobile.svg`}
					media="(max-width: 767px)"
					width="32"
					height="14"
				/>
				<source
					srcSet={`${process.env.PUBLIC_URL}/assets/images/svg/logo/logo-tablet.svg`}
					media="(max-width: 1023px)"
					width="54"
					height="23"
				/>
				<img
					id="header-logo"
					className={styles['header-logo']}
					src={`${process.env.PUBLIC_URL}/assets/images/svg/logo/logo-desktop.svg`}
					alt="Главная страница"
					width="192"
					height="31"
				/>
			</picture>
		</a>
	);
};

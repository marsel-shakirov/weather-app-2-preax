import styles from './Logo.module.css';

import LogoDesktop from '../../assets/images/svg/logo/logo-desktop.svg';
import LogoMobile from '../../assets/images/svg/logo/logo-mobile.svg';
import LogoTablet from '../../assets/images/svg/logo/logo-tablet.svg';

export const Logo = () => {
	return (
		<a href="/" className={styles['header-link']}>
			<picture className={styles['header-picture']}>
				<source
					srcSet={LogoMobile}
					media="(max-width: 767px)"
					width="32"
					height="14"
				/>
				<source
					srcSet={LogoTablet}
					media="(max-width: 1023px)"
					width="54"
					height="23"
				/>
				<img
					id="header-logo"
					className={styles['header-logo']}
					src={LogoDesktop}
					alt="Главная страница"
					width="192"
					height="31"
				/>
			</picture>
		</a>
	);
};

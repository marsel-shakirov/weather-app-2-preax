import { CityCard } from '../../../shared/ui';
import { CardList } from '../../../widgets';

import styles from './MainPage.module.css';

export const MainPage = () => {
	return (
		<main>
			<section className={styles['weather-today']}>
				<CityCard />
				<CardList />
			</section>
		</main>
	);
};

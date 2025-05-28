import { weatherData } from '../../../shared/api';

import { Card } from '../../../shared/ui';

import styles from './CardList.module.css';

export const CardList = () => {
	return (
		<ul className={styles['cards-wrapper']} id="cards">
			{weatherData.map((card, index) => {
				let leftValue = '';
				let maskPosition = '';

				if (index === 0) {
					maskPosition = '79px';
					leftValue = '75px';
				}
				if (index === 1) {
					maskPosition = '95px';
					leftValue = '92px';
				}
				if (index === 2) {
					maskPosition = '32px';
					leftValue = '27px';
				}
				// set left value on 768px for progress-bar__range
				if (window.innerWidth <= 767) {
					if (index === 0) {
						leftValue = '52px';
						maskPosition = '56px';
					}
					if (index === 1) {
						leftValue = '52px';
						maskPosition = '56px';
					}

					if (index === 2) {
						leftValue = '17px';
						maskPosition = '21px';
					}
				} else {
					leftValue = card.value2
						? `${card.value2}px`
						: `${parseInt(card.value)}px`;
				}

				return (
					<Card
						key={`${card.icon}_${index}`}
						{...card}
						leftValue={leftValue}
						maskPosition={maskPosition}
					/>
				);
			})}
		</ul>
	);
};

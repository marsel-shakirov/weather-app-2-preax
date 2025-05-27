import { useId, useState } from 'react';

import { Input, Logo } from '../../../shared/ui';
import styles from './Header.module.css';

export const Header = () => {
	const searchId = useId();
	const [text, setText] = useState('');

	const handleInputForm = event => {
		setText(event.target.value.trim());
	};

	const handleSubmit = event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		setText('');
		console.log(formData.get('town'));
	};

	const handleRemoveText = event => {
		setText('');
	};

	return (
		<header className={styles.header}>
			<Logo />
			<form
				onSubmit={handleSubmit}
				className={`${styles['input-wrapper']} ${
					text ? styles['has-text'] : ''
				}`}
			>
				<label className="visually-hidden" htmlFor={searchId}>
					Поиск по городу
				</label>
				<Input
					onInput={handleInputForm}
					id={searchId}
					name="town"
					value={text}
				/>
				<button
					type="button"
					onClick={handleRemoveText}
					className={styles['search-icon']}
				></button>
			</form>
		</header>
	);
};

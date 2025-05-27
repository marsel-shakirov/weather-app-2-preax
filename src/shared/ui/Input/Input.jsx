import styles from './Input.module.css';

export const Input = ({ id, name, onInput, value }) => {
	return (
		<input
			type="text"
			value={value}
			name={name}
			onInput={onInput}
			id={id}
			className={styles['header-input']}
			placeholder="Поиск по городу"
		/>
	);
};

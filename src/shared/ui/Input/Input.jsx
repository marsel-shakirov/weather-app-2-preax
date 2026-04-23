import styles from './Input.module.css';

export const Input = ({ id, ref, name, onInput, value }) => {
  return (
    <input
      ref={ref}
      type='text'
      value={value}
      name={name}
      onInput={onInput}
      id={id}
      className={styles.input}
      placeholder='Поиск по городу'
    />
  );
};

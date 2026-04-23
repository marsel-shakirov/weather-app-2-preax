import { useId, useRef, useState } from 'react';

import { Icon, Input, Logo } from 'shared/ui';

import { clsx } from 'shared/utils/clsx';

import styles from './Header.module.css';

export const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const searchId = useId();
  const inputRef = useRef(null);

  const buttonLabel = inputValue ? 'Очистить поле поиска' : 'Найти город';

  const handleInputForm = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    inputRef.current?.blur();
    console.log(formData.get('town'));
  };

  const handleResetForm = (event) => {
    inputRef.current?.focus();
    setInputValue('');
  };

  return (
    <header className={styles.header}>
      <Logo />
      <form onSubmit={handleSubmitForm} className={clsx(styles, 'form', { hasText: inputValue })}>
        <label className='visually-hidden' htmlFor={searchId}>
          Поиск по городу
        </label>
        <Input
          ref={inputRef}
          onInput={handleInputForm}
          id={searchId}
          name='town'
          value={inputValue}
        />

        <button
          aria-label={buttonLabel}
          type='button'
          onClick={handleResetForm}
          className={styles.formSubmit}
        >
          <Icon className={styles.search} name='search' />
          <Icon className={styles.reset} name='reset' />
        </button>
      </form>
    </header>
  );
};

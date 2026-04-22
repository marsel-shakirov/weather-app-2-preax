import { useId, useRef, useState } from 'react';

import { Icon, Input, Logo } from 'shared/ui';

import { clsx } from 'shared/utils/clsx';

import styles from './Header.module.css';

export const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const searchId = useId();
  const inputRef = useRef(null);

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
    <header className={clsx(styles, 'header')}>
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

        <button type='button' onClick={handleResetForm} className={clsx(styles, 'formSubmit')}>
          <Icon className={clsx(styles, 'search')} name='search' size={24} />
          <Icon className={clsx(styles, 'reset')} name='reset' size={24} />
        </button>
      </form>
    </header>
  );
};

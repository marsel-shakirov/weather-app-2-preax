import { Footer, Header } from 'widgets';

import { MainPage } from 'pages';

import { clsx } from 'shared/utils/clsx';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={clsx(styles, 'content')}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

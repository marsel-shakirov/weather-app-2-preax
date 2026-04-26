import { useState } from 'react';

import { SliderList } from './SliderList/SliderList';
import { SliderTabs } from './SliderTabs/SliderTabs';

import styles from './Slider.module.css';

export const Slider = () => {
  const [range, setRange] = useState('24h');

  const handleChangeRange = (currentRange) => {
    setRange(currentRange);
  };

  return (
    <section className={styles.slider}>
      <h2 className='visually-hidden'>Прогноз погоды</h2>
      <SliderTabs onChange={handleChangeRange} range={range} />
      <SliderList range={range} />
    </section>
  );
};

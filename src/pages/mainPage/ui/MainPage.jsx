import { Slider, WeatherPanel } from 'widgets';

export const MainPage = () => {
  return (
    <main>
      <h1 className='visually-hidden'>Погода в вашем городе</h1>
      <WeatherPanel />
      <Slider />
    </main>
  );
};

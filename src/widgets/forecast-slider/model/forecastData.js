import sliderCard24h from 'shared/api/mocks/slider-for-24h.json';
import sliderCard5d from 'shared/api/mocks/slider-for-5days.json';

export const getForecastData = (range) => {
  return range === '24h' ? sliderCard24h : sliderCard5d;
};

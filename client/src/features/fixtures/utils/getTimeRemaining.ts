import {CountdownValues} from '../types';

export const getTimeRemaining = (fixtureDate: number): CountdownValues => {
  const days = Math.floor(fixtureDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (fixtureDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((fixtureDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((fixtureDate % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

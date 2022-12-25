import { useEffect, useRef } from 'react';
import { getTimeRemaining } from '../utils/getTimeRemaining';
import { CountdownValues } from '../types';

export const useCountdown = (fixtureDate: string): CountdownValues => {
  const countdownDate = new Date(fixtureDate).getTime();
  const timeLeftRef = useRef(countdownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      timeLeftRef.current = countdownDate - new Date().getTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownDate]);

  return getTimeRemaining(timeLeftRef.current);
};

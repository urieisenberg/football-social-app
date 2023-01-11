import { useCountdown } from '../hooks/useCountdown';
import {
  CountdownTime,
  CountdownContainer,
  CountdownText,
  CountdownMiniText,
} from '../styles/Countdown';

interface FixturesCountdownProps {
  date: string;
}

export const FixturesCountdown = ({ date }: FixturesCountdownProps) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  const isSoon = days <= 3;

  let content;
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0)
    content = null;
  else
    content = (
      <>
        <CountdownContainer>
          <CountdownTime isSoon={isSoon}> {days}</CountdownTime>
          <CountdownTime isSoon={isSoon}>{hours}</CountdownTime>
          <CountdownTime isSoon={isSoon}>{minutes}</CountdownTime>
          <CountdownTime isSoon={isSoon}>{seconds}</CountdownTime>
        </CountdownContainer>
        <CountdownContainer>
          <CountdownText isSoon={isSoon}>
            {days === 1 ? 'day' : 'days'}
          </CountdownText>
          <CountdownText isSoon={isSoon}>
            {hours === 1 ? 'hour' : 'hours'}
          </CountdownText>
          <CountdownText isSoon={isSoon}>
            {minutes === 1 ? 'minute' : 'minutes'}
          </CountdownText>
          <CountdownText isSoon={isSoon}>
            {seconds === 1 ? 'second' : 'seconds'}
          </CountdownText>
          <CountdownMiniText isSoon={isSoon}>d</CountdownMiniText>
          <CountdownMiniText isSoon={isSoon}>h</CountdownMiniText>
          <CountdownMiniText isSoon={isSoon}>m</CountdownMiniText>
          <CountdownMiniText isSoon={isSoon}>s</CountdownMiniText>
        </CountdownContainer>
      </>
    );

  return <>{content}</>;
};

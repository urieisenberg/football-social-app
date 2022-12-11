import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Transition } from '../../components/Transition';
import { Container } from './Container';

export const Welcome = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate('/login');
  const navigateToRegister = () => navigate('/register');

  return (
    <Transition>
      <Container>
        <h1> Welcome to Serie A Fanzone </h1>
        <h4>
          A trustworthy social media made for fans only, where you can check and
          track everything about the first Italian football league.
        </h4>{' '}
        <h4>
          {' '}
          All information displayed on the website is updated continuously based
          on a real time data, including all league fixtures, players,
          statistics, goals, transfers and much more information from the past
          to the present.
        </h4>
        <h4>
          {' '}
          By picking your favourite team, you will receive all of the
          information you need about your team. You'll also have direct access
          to a private team feed, where you can share and talk with other
          fans.  
        </h4>
        <br />
        <div>
          <Button text="Login" onClick={navigateToLogin} />
          <Button text="Register" onClick={navigateToRegister} />
        </div>
      </Container>
    </Transition>
  );
};

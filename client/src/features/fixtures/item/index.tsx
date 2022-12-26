import { useParams } from 'react-router-dom';
import { FixturesItemEvents } from './events';
export const FixturesItem = () => {
  const { fixture } = useParams();

  return (
    <div>
      <FixturesItemEvents homeTeam={123123} awayTeam={121} />
    </div>
  );
};

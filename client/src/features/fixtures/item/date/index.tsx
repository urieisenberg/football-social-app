import { FixturesDate } from '../../styles';

interface FixtureDateProps {
  date: string;
}

export const FixtureDate = ({ date }: FixtureDateProps) => {
  return <FixturesDate>{new Date(date).toLocaleDateString()}</FixturesDate>;
};

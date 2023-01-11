import { FixtureTeamStatistics } from '../../../types';
import { Transition } from '../../../../../components/Transition';
import {
  EventsContainer,
  EventsItem,
} from '../../../styles';

interface FixtureTeamStatsProps {
  homeTeam: FixtureTeamStatistics;
  awayTeam: FixtureTeamStatistics;
  playersDataAvailable: boolean;
}

export const FixtureTeamStats = ({
  homeTeam,
  awayTeam,
  playersDataAvailable,
}: FixtureTeamStatsProps) => {
  let content;
  if (!awayTeam || !homeTeam) content = null;
  else
    content = (
      <EventsContainer>
        <EventsItem>
          {homeTeam.statistics.map((s) => (
            <EventsItem key={s.type}>{s.value}</EventsItem>
          ))}
        </EventsItem>
        <EventsItem>
          {awayTeam.statistics.map((s) => (
            <EventsItem key={s.type}>{s.type}</EventsItem>
          ))}
        </EventsItem>
        <EventsItem>
          {awayTeam.statistics.map((s) => (
            <EventsItem key={s.type}>{s.value}</EventsItem>
          ))}
        </EventsItem>
      </EventsContainer>
    );

  return <Transition key="stats">{content}</Transition>;
};

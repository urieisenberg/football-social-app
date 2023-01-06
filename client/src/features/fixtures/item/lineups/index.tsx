import { useNavigate } from 'react-router-dom';
import { useNavigateToPlayer } from '../../../../routes/hooks';
import { FixtureLineup } from '../../types';
import { Transition } from '../../../../components/Transition';
import {
  EventsContainer,
  EventsItem,
  EventsPlayer,
  EventsTitle,
  FixturesHR,
  FixturesLink,
} from '../../styles';

interface FixtureLineupsProps {
  homeTeam: FixtureLineup;
  awayTeam: FixtureLineup;
  playersDataAvailable: boolean;
}

export const FixtureLineups = ({
  homeTeam,
  awayTeam,
  playersDataAvailable,
}: FixtureLineupsProps) => {
  const navigate = useNavigate();
  const { navigateToPlayer } = useNavigateToPlayer();

  let content;
  if (!awayTeam || !homeTeam) content = null;
  else
    content = (
      <EventsContainer>
        <EventsItem>
          <EventsTitle>Coach</EventsTitle>
          <FixturesLink
            onClick={() =>
              navigate(
                `/team/${homeTeam.team.id}/${homeTeam.team.name}/staff/${homeTeam.coach.id}`
              )
            }
          >
            {homeTeam.coach.name}
          </FixturesLink>
          <FixturesHR/>
          <EventsTitle>Start XI</EventsTitle>
          {homeTeam.startXI.map((p) => (
            <EventsPlayer
              key={p.player.id}
              onClick={() =>
                playersDataAvailable &&
                navigateToPlayer(
                  homeTeam.team.id,
                  homeTeam.team.name,
                  p.player.id
                )
              }
            >
              {p.player.name}
            </EventsPlayer>
          ))}
           <FixturesHR/>
          <EventsTitle>Substitutes</EventsTitle>

          {homeTeam.substitutes.map((p) => (
            <EventsPlayer
              key={p.player.id}
              onClick={() =>
                playersDataAvailable &&
                navigateToPlayer(
                  homeTeam.team.id,
                  homeTeam.team.name,
                  p.player.id
                )
              }
            >
              {p.player.name}
            </EventsPlayer>
          ))}
        </EventsItem>
        <EventsItem></EventsItem>
        <EventsItem>

          <EventsTitle>Coach</EventsTitle>
          <FixturesLink
            onClick={() =>
              navigate(
                `/team/${awayTeam.team.id}/${awayTeam.team.name}/staff/${awayTeam.coach.id}`
              )
            }
          >
            {awayTeam.coach.name}
          </FixturesLink>
          <FixturesHR/>
          <EventsTitle>Start XI</EventsTitle>
          {awayTeam.startXI.map((p) => (
            <EventsPlayer
              key={p.player.id}
              onClick={() =>
                playersDataAvailable &&
                navigateToPlayer(
                  awayTeam.team.id,
                  awayTeam.team.name,
                  p.player.id
                )
              }
            >
              {p.player.name}
            </EventsPlayer>
          ))}
           <FixturesHR/>
          <EventsTitle>Substitutes</EventsTitle>
          {awayTeam.substitutes.map((p) => (
            <EventsPlayer
              key={p.player.id}
              onClick={() =>
                playersDataAvailable &&
                navigateToPlayer(
                  awayTeam.team.id,
                  awayTeam.team.name,
                  p.player.id
                )
              }
            >
              {p.player.name}
            </EventsPlayer>
          ))}
        </EventsItem>
      </EventsContainer>
    );

  return <Transition key="lineups">{content}</Transition>;
};

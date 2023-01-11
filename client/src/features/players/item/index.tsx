import { useParams } from 'react-router-dom';
import { useGetPlayerQuery } from '../api';
import { useNavigateToTeam } from '../../../app/hooks';
import { PlayersItemStatistics } from './statistics';
import { PlayerTrophies } from '../../trophies/list/playerTrophies';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import {
  PlayersContainer,
  PlayersTitle,
  PlayersListContainer,
  PlayersCol,
  PlayersImage,
  PlayersLine,
  PlayersTeam,
} from '../styles';

export const PlayersItem = () => {
  const { playerid, teamid } = useParams();
  const { data, isLoading, isSuccess } = useGetPlayerQuery({
    playerid: playerid as string,
    teamid: teamid as string,
  });

  const { navigateToTeam } = useNavigateToTeam();

  const player = data?.player;
  const stats = data?.statistics[0];

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && player && stats)
    content = (
      <Transition key={player.id}>
        <PlayersContainer>
          <PlayersTitle>
            {player.firstname + ' ' + player.lastname}
          </PlayersTitle>
          <PlayersImage src={player.photo} alt={player.name} />
          <PlayersListContainer>
            <PlayersCol>
              Team:{' '}
              <PlayersTeam
                onClick={() => navigateToTeam(stats.team.id, stats.team.name)}
              >
                {stats.team.name}
              </PlayersTeam>
              {/* navigate */}
            </PlayersCol>
            <PlayersCol>Age: {player.age}</PlayersCol>
            <PlayersCol>Height: {player.height}</PlayersCol>
            <PlayersCol>Weight: {player.weight}</PlayersCol>
          </PlayersListContainer>
          <PlayersListContainer>
            <PlayersCol>Born: {player.birth.date}</PlayersCol>
            <PlayersCol>City: {player.birth.place}</PlayersCol>
            <PlayersCol>Country: {player.birth.country}</PlayersCol>
            <PlayersCol>Nationality: {player.nationality}</PlayersCol>
          </PlayersListContainer>
          <PlayersItemStatistics stats={stats} />
          <PlayersLine />
          <PlayerTrophies />
        </PlayersContainer>
      </Transition>
    );

  return <>{content}</>;
};

import { Statistics } from '../../types';
import { Transition } from '../../../../components/Transition';
import {
  PlayersSubtitle,
  PlayersListContainer,
  PlayersContainer,
  PlayersCol,
  PlayersRating,
  PlayersLine,
} from '../../styles';

interface PlayersItemStatisticsProps {
  stats: Statistics;
}

export const PlayersItemStatistics = ({
  stats,
}: PlayersItemStatisticsProps) => {
  console.log(stats)
  return (
    <Transition key="players-stats">
      <PlayersLine />
      <PlayersContainer>
        <PlayersSubtitle>
          Statistics for {stats.league.name + ' ' + stats.league.season}
        </PlayersSubtitle>
        <PlayersListContainer>
          <PlayersCol>
            Analysts rating:
            <PlayersRating>{stats.games.rating || 0}</PlayersRating>
          </PlayersCol>
        </PlayersListContainer>
        <PlayersListContainer>
          <PlayersCol>Appearances: {stats.games.appearences || 0}</PlayersCol>
          <PlayersCol>Minutes: {stats.games.minutes}</PlayersCol>
          <PlayersCol>Lineups: {stats.games.lineups || 0}</PlayersCol>
          <PlayersCol>
            Substitutes in: {stats.substitutes
.in || 0}
          </PlayersCol>
          <PlayersCol>
            Substitutes out: {stats.substitutes
.out || 0}
          </PlayersCol>
        </PlayersListContainer>
        <PlayersListContainer>
          <PlayersCol>Position: {stats.games.position}</PlayersCol>
          {stats.games.position === 'Goalkeeper' ? (
            <>
              <PlayersCol>
                Goals conceded: {stats.goals.conceded || 0}
              </PlayersCol>
              <PlayersCol>Saves: {stats.goals.saves || 0}</PlayersCol>
            </>
          ) : (
            <>
              <PlayersCol>Goals: {stats.goals.total || 0}</PlayersCol>
              <PlayersCol>Assists: {stats.goals.assists || 0}</PlayersCol>
            </>
          )}
          <PlayersCol>Yellow Cards: {stats.cards.yellow}</PlayersCol>
          <PlayersCol>Red Cards: {stats.cards.red}</PlayersCol>
        </PlayersListContainer>
        <PlayersListContainer>
          <PlayersCol>Shots: {stats.shots.total || 0}</PlayersCol>
          <PlayersCol>Shots on target: {stats.shots.on || 0}</PlayersCol>
          <PlayersCol>Passes: {stats.passes.total || 0}</PlayersCol>
          <PlayersCol>Passes key: {stats.passes.key || 0}</PlayersCol>
          <PlayersCol>
            Passes accuracy: {stats.passes.accuracy || 0}%
          </PlayersCol>
        </PlayersListContainer>
        <PlayersListContainer>
          <PlayersCol>Tackles: {stats.tackles.total || 0}</PlayersCol>
          <PlayersCol>Blocks: {stats.tackles.blocks || 0}</PlayersCol>
          <PlayersCol>
            Interceptions: {stats.tackles.interceptions || 0}
          </PlayersCol>
          <PlayersCol>Fouls drawn: {stats.fouls.drawn || 0}</PlayersCol>
          <PlayersCol>Fouls committed: {stats.fouls.committed || 0}</PlayersCol>
        </PlayersListContainer>
        <PlayersListContainer>
          <PlayersCol>Dribbles: {stats.dribbles.success || 0}</PlayersCol>
          <PlayersCol>
            Dribbles attempts: {stats.dribbles.attempts || 0}
          </PlayersCol>
          <PlayersCol>Dribbles Past: {stats.dribbles.past || 0}</PlayersCol>
          <PlayersCol>Duels Won: {stats.duels.won || 0}</PlayersCol>
          <PlayersCol>Duels Total: {stats.duels.total || 0}</PlayersCol>
        </PlayersListContainer>
      </PlayersContainer>
    </Transition>
  );
};

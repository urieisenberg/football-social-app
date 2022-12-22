import { useParams, useNavigate } from 'react-router-dom';
import {
  useGetCurrentLeagueQuery,
  useGetLeagueTableQuery,
} from '../api';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import {
  TableWrapper,
  TableContainer,
  TableTitle,
  TableHeader,
  TableLine,
  TableHeadItem,
  TableBody,
  TableRow,
  TableData,
  TableLink,
  TableCurrentTeam,
  TableImage,
  TableLogo,
} from '../styles';

export const LeagueTable = () => {
  const { teamid, teamname, leagueid } = useParams();
  const navigate = useNavigate();

  const { data: leagueData, isSuccess: leagueIsSuccess } =
    useGetCurrentLeagueQuery(teamid as string);

  const {
    data: table,
    isSuccess: tableIsSuccess,
    isLoading,
  } = useGetLeagueTableQuery(leagueData || (leagueid as string));

  console.log(table);

  let content;
  if (isLoading || !table) content = <Loader />;
  else if (tableIsSuccess && table)
    content = (
      <Transition key={table?.league.id}>
        <TableWrapper>
          {!leagueid && (
            <TableLink onClick={() => navigate(`/league/${leagueData} `)}>
              <TableLogo src={table?.league.logo} alt={table.league.country} />
              <TableTitle>
                {table?.league.name + ', ' + table?.league.country}
              </TableTitle>
            </TableLink>
          )}
          <TableContainer>
            <TableHeader>
              <TableLine>
                <TableHeadItem>#</TableHeadItem>
                <TableHeadItem></TableHeadItem>
                <TableHeadItem>Team</TableHeadItem>
                <TableHeadItem>G</TableHeadItem>
                <TableHeadItem>W</TableHeadItem>
                <TableHeadItem>D</TableHeadItem>
                <TableHeadItem>L</TableHeadItem>
                <TableHeadItem>GF</TableHeadItem>
                <TableHeadItem>GA</TableHeadItem>
                <TableHeadItem>GD</TableHeadItem>
                <TableHeadItem>Pts</TableHeadItem>
              </TableLine>
            </TableHeader>
            {table?.standings?.map((team) => (
              <TableBody key={team.rank}>
                {team.team.name !== teamname ? (
                  <TableRow
                    onClick={() =>
                      navigate(`/team/${team.team.id}/${team.team.name}`)
                    }
                    key={team.rank}
                  >
                    <TableData>{team.rank}</TableData>
                    <TableData>
                      <TableImage src={team.team.logo} alt={team.team.name} />
                    </TableData>
                    <TableData>{team.team.name}</TableData>
                    <TableData>{team.all.played}</TableData>
                    <TableData>{team.all.win}</TableData>
                    <TableData>{team.all.draw}</TableData>
                    <TableData>{team.all.lose}</TableData>
                    <TableData>{team.all.goals.for}</TableData>
                    <TableData>{team.all.goals.against}</TableData>
                    <TableData>{team.goalsDiff}</TableData>
                    <TableData>{team.points}</TableData>
                  </TableRow>
                ) : (
                  <TableCurrentTeam
                    key={team.rank}
                    onClick={() =>
                      navigate(`/team/${team.team.id}/${team.team.name}`)
                    }
                  >
                    <TableData>{team.rank}</TableData>
                    <TableData>
                      <TableImage src={team.team.logo} alt={team.team.name} />
                    </TableData>
                    <TableData>{team.team.name}</TableData>
                    <TableData>{team.all.played}</TableData>
                    <TableData>{team.all.win}</TableData>
                    <TableData>{team.all.draw}</TableData>
                    <TableData>{team.all.lose}</TableData>
                    <TableData>{team.all.goals.for}</TableData>
                    <TableData>{team.all.goals.against}</TableData>
                    <TableData>{team.goalsDiff}</TableData>
                    <TableData>{team.points}</TableData>
                  </TableCurrentTeam>
                )}
              </TableBody>
            ))}
          </TableContainer>
        </TableWrapper>
      </Transition>
    );

  return <section>{content}</section>;
};

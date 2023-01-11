import { useAppSelector } from '../../app/hooks';
import { useParams, useRoutes, Outlet, Navigate } from 'react-router-dom';
import { teams } from '../../utils/db/teams';
import { TeamInformation } from '../../features/teams/info';
import { VenuesItem } from '../../features/venues/item';
import {
  FixturesTeamLayout,
  SocialLayout,
  TeamPlayersLayout,
  TransfersLayout,
  CoachLayout,
} from '../../app/layouts';
import { Standings } from '../../features/standings';
import { PostsTeam } from '../../features/posts/list/team';
import { Nav } from '../../components/Nav';

export const Team = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { teamid } = useParams();

  let elements = useRoutes([
    { path: '', element: <Navigate to="fixtures" /> },
    { path: 'fixtures/*', element: <FixturesTeamLayout /> },
    { path: 'players/*', element: <TeamPlayersLayout /> },
    { path: 'social/*', element: <SocialLayout /> },
    { path: 'standings/', element: <Standings /> },
    { path: 'staff/*', element: <CoachLayout /> },
    { path: 'transfers/*', element: <TransfersLayout /> },
    { path: 'stadium', element: <VenuesItem /> },
    { path: 'feed', element: <PostsTeam /> },
  ]);

  const currentTeam = teams.find((team) => team.id.toString() === teamid);

  const renderNavLinks = () => {
    let links = [
      'fixtures',
      'players',
      'transfers',
      'standings',
      'stadium',
      'staff',
    ];
    if (currentTeam) links.push('social');
    if (teamid === user?.team.id.toString()) links.push('feed');

    return links;
  };

  return (
    <>
      <TeamInformation />
      <Nav links={renderNavLinks()} />
      <Outlet />
      {elements}
    </>
  );
};

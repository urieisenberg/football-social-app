import { useParams, useRoutes, Outlet, Navigate } from 'react-router-dom';
import { teams } from '../../app/utils/db/teams';
import { TeamInformation } from '../../features/teams/info';
import { VenuesItem } from '../../features/venues/item';
import { SocialLayout } from '../../features/social/layout';
import { TeamPlayersLayout } from '../../features/players/layout';
import { TransfersLayout } from '../../features/transfers/layout';
import { Standings } from '../../features/standings';
import { Nav } from '../../components/Nav';
import { CoachLayout } from '../../features/coaches/layout';

export const Team = () => {
  const { teamid } = useParams();

  let elements = useRoutes([
    { path: '', element: <Navigate to="fixtures" /> },
    { path: 'fixtures/*', element: <>Fixtures</> },
    { path: 'players/*', element: <TeamPlayersLayout /> },
    { path: 'social/*', element: <SocialLayout /> },
    { path: 'standings/', element: <Standings /> },
    { path: 'staff/*', element: <CoachLayout /> },
    { path: 'transfers/*', element: <TransfersLayout /> },
    { path: 'stadium', element: <VenuesItem /> },
    // {path:'feed', element: <>Feed</>},
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
    if (currentTeam) links.push('social', 'feed');
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

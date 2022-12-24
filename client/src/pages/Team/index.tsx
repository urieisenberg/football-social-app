import { useParams, useRoutes, Outlet, Navigate } from 'react-router-dom';
import { teams } from '../../utils/db/teams';
import { TeamInformation } from '../../features/teams/Info';
import { VenuesItem } from '../../features/venues/Item';
import { SocialLayout } from '../../features/social/Layout';
import { TeamPlayersLayout } from '../../features/players/Layout';
import { TransfersLayout } from '../../features/transfers/Layout';
import { Standings } from '../../features/standings';
import { Nav } from '../../components/Nav';

export const Team = () => {
  const { teamid } = useParams();

  let elements = useRoutes([
    { path: '', element: <Navigate to="fixtures" /> },
    { path: 'fixtures/*', element: <>Fixtures</> },
    { path: 'players/*', element: <TeamPlayersLayout /> },
    { path: 'social/*', element: <SocialLayout /> },
    { path: 'standings/', element: <Standings /> },
    // { path: "coach", element: <CoachLayout /> },
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
      'coach',
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

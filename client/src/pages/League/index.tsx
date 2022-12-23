import { useRoutes, useParams, Outlet, Navigate } from 'react-router-dom';
import { LeagueInfo, LeagueLogos } from '../../features/leagues';
import { Standings as LeagueTable } from '../../features/standings';
import { SERIA_A } from '../../app/types';
import { Nav } from '../../components/Nav';
import { SocialLayout } from '../../features/social/Layout';
import { VenuesLayout } from '../../features/venues/Layout';
import { LeaguePlayersLayout } from '../../features/players/Layout';

export const League = () => {
  const { leagueid } = useParams();

  let elements = useRoutes([
    { path: '', element: <Navigate to="social" /> },
    { path: 'venues/*', element: <VenuesLayout /> },
    { path: 'players/*', element: <LeaguePlayersLayout /> },
    { path: 'social/*', element: <SocialLayout /> },
    { path: 'table', element: <LeagueTable /> },
  ]);

  const leagueIsSerieA = leagueid === SERIA_A;

  const renderLinks = () => {
    let links = [];
    links.push('fixtures', 'players', 'table', 'venues', 'social');
    if (!leagueIsSerieA) links.pop();
    return links;
  };

  return (
    <>
      <LeagueInfo />
      <Nav links={renderLinks()} />
      {leagueIsSerieA && <LeagueLogos />}
      <Outlet />
      {elements}
    </>
  );
};

import { useRoutes, useParams, Outlet, Navigate } from 'react-router-dom';
import { LeagueInfo, LeagueLogos } from '../../features/leagues';
import { Standings as LeagueTable } from '../../features/standings';
import { SERIA_A } from '../../app/types';
import { Nav } from '../../components/Nav';
import { Social } from '../../features/social';
import { Venues } from '../../features/venues';
import { Players } from '../../features/players';

export const League = () => {
  const { leagueid } = useParams();

  let elements = useRoutes([
    { path: '', element: <Navigate to="social" /> },
    { path: 'venues/*', element: <Venues /> },
    { path: 'players/*', element: <Players /> },
    { path: 'social/*', element: <Social /> },
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

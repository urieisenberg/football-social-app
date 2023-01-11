import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { CurrentFixturesList } from '../../list/round';
import { FixturesItem } from '../../item';
import { Nav } from '../../../../components/Nav';

export const FixturesLeagueLayout = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="next" /> },
    { path: 'next', element: <CurrentFixturesList /> },
    { path: 'last', element: <CurrentFixturesList />},
    { path: ':fixture', element: <FixturesItem /> },
  ]);

  return (
    <>
      <Nav links={['last', 'next']} mini="true" />
      <Outlet />
      {elements}
    </>
  );
};

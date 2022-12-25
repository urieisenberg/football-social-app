import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { NextFixturesList } from '../../list/next';
import { PreviousFixturesList } from '../../list/previous';
import { HeadToHeadFixturesList } from '../../list/headToHead';
import { FixturesItem } from '../../item';
import { Nav } from '../../../../components/Nav';

export const FixturesTeamLayout = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="next" /> },
    { path: 'next', element: <NextFixturesList /> },
    { path: 'last', element: <PreviousFixturesList /> },
    { path: ':fixture', element: <FixturesItem /> },
    {
      path: ':teamids/:teamname1/:teamname2',
      element: <HeadToHeadFixturesList />,
    },
  ]);

  return (
    <>
      <Nav links={['last', 'next']} mini="true" />
      <Outlet />
      {elements}
    </>
  );
};

import {
  useRoutes,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { Nav } from '../../../components/Nav';
import { SquadPlayersList } from '../List';
import { InjuriesTeamList } from '../../injuries/List';

export const TeamPlayersLayout = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="squad" /> },
    { path: 'squad', element: <SquadPlayersList /> },
    { path: 'injuries', element: <InjuriesTeamList /> },
  ]);

  return (
    <>
      <Nav links={['squad', 'injuries']} mini="true" />
      <Outlet />
      {elements}
    </>
  );
};

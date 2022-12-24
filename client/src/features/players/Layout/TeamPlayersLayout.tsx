import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../../../components/Nav';
import { SquadPlayersList } from '../list';
import { InjuriesTeamList } from '../../injuries/list';
import { PlayersItem } from '../item';

export const TeamPlayersLayout = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="squad" /> },
    { path: 'squad', element: <SquadPlayersList /> },
    { path: 'injuries', element: <InjuriesTeamList /> },
    { path: ':playerid', element: <PlayersItem /> },
  ]);

  return (
    <>
      <Nav links={['squad', 'injuries']} mini="true" />
      <Outlet />
      {elements}
    </>
  );
};

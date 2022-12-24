import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { TransfersList } from '../List';
import { Nav } from '../../../components/Nav';

export const TransfersLayout = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="arrived" /> },
    { path: 'arrived', element: <TransfersList /> },
    { path: 'left', element: <TransfersList /> },
  ]);

  return (
    <>
      <Nav mini="true" links={['arrived', 'left']} />
      <Outlet />
      {elements}
    </>
  );
};

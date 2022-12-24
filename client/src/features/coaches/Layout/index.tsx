import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { CoachList } from '../list';
import { CoachItem } from '../styles';

export const CoachLayout = () => {
  let elements = useRoutes([
    { path: '', element: <Navigate to="list" /> },
    { path: 'list', element: <CoachList /> },
    { path: ':coachid', element: <CoachItem /> },
  ]);

  return (
    <>
      <Outlet />
      {elements}
    </>
  );
};

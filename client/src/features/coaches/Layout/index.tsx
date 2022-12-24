import { useRoutes, Outlet } from 'react-router-dom';
import { CoachList } from '../list';
import { CoachItem } from '../item';

export const CoachLayout = () => {
  let elements = useRoutes([
    { path: '', element: <CoachList /> },
    { path: ':coachid', element: <CoachItem /> },
  ]);

  return (
    <>
      <Outlet />
      {elements}
    </>
  );
};

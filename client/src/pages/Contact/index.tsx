import { useAppSelector } from '../../app/hooks';
import { useRoutes, Outlet, Navigate } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import { BackButton } from '../../components/Button';
import {
  CreateTicket,
  TicketsList,
  TicketsMain,
  Ticket,
  EditTicket,
} from '../../features/tickets';

export const Contact = () => {
  const { user } = useAppSelector((state) => state.auth);
  let elements = useRoutes([
    { index: true, path: '', element: <TicketsMain /> },
    { path: 'tickets', element: <TicketsList /> },
    { path: 'create/ticket', element: <CreateTicket /> },
    { path: 'tickets/:ticketId', element: <Ticket /> },
    { path: 'tickets/:ticketId/edit', element: <EditTicket /> },
    {
      path: 'settings',
      element: <Navigate to={`/account/${user?._id}/${user?.username}`} />,
    },
  ]);

  return (
    <>
      <Nav links={['tickets', 'create ticket', 'settings']} />
      <BackButton size={30} />
      <Outlet />
      {elements}
    </>
  );
};

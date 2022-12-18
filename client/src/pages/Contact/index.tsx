import { useRoutes, Outlet } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import { BackButton } from '../../components/Button';
import {
  CreateTicket,
  TicketsList,
  TicketsMain,
  Ticket,
  EditTicket
} from '../../features/tickets';

export const Contact = () => {
  let elements = useRoutes([
    { index: true, path: '', element: <TicketsMain /> },
    { path: 'tickets', element: <TicketsList /> },
    { path: 'create/ticket', element: <CreateTicket /> },
    { path: 'tickets/:ticketId', element: <Ticket /> },
    { path: 'tickets/:ticketId/edit', element: <EditTicket />}
  ]);

  return (
    <>
      <Nav links={['tickets', 'create ticket']} />
      <BackButton size={30} />
      <Outlet />
      {elements}
    </>
  );
};

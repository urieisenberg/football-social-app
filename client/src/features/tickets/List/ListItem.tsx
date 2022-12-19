import { useNavigate } from 'react-router-dom';
import { useDeleteTicketMutation } from '../../../app/services/server-api/tickets';
import { DeleteTicket } from '../../../app/types';
import { Ticket } from '../../../app/types';
import { toast } from 'react-toastify';
import { ItemContainer, ItemHeading, ItemStatus } from '../styles';
import { Button } from '../../../components/Button';

interface Props {
  ticket: Ticket;
}

export const TicketsListItem = ({ ticket }: Props) => {
  const navigate = useNavigate();

  const [deleteTicket] = useDeleteTicketMutation();

  const onDelete = async (data: DeleteTicket) => {
    await deleteTicket(data);
    toast.success('Ticket deleted');
    navigate('/contact/tickets');
  };

  let actionContent;
  ticket.status === 'open'
    ? (actionContent = (
        <Button
          text="View"
          variant="primary"
          onClick={() => navigate(`/contact/tickets/${ticket?._id}`)}
        />
      ))
    : (actionContent = (
        <Button
          text="delete"
          variant="error"
          onClick={() => onDelete({ id: ticket?._id as number })}
        />
      ));

  return (
    <ItemContainer>
      <ItemHeading>
        {new Date(ticket?.createdAt).toLocaleDateString()}
      </ItemHeading>
      <ItemHeading>{ticket?.subject}</ItemHeading>
      <ItemStatus status={ticket?.status}> {ticket?.status}</ItemStatus>
      {actionContent}
    </ItemContainer>
  );
};

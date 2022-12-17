import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';
import { Ticket } from '../../../app/types';
import { ItemContainer, ItemHeading, ItemStatus } from '../styles';

interface Props {
  ticket: Ticket;
}

export const TicketsListItem = ({ ticket }: Props) => {
  return (
    <ItemContainer>
      <ItemHeading>
        {new Date(ticket?.createdAt).toLocaleDateString()}
      </ItemHeading>
      <ItemHeading>{ticket?.subject}</ItemHeading>
      <ItemStatus status={ticket?.status}> {ticket?.status}</ItemStatus>
      <Link to={`/contact/ticket/${ticket?._id}`}>
        <Button text="View" />
      </Link>
    </ItemContainer>
  );
};

import { useAppSelector } from '../../../hooks/useAppSelector';
import {
  useGetTicketsQuery,
} from '../../../app/services/server-api/tickets';
import { TicketsListItem } from './ListItem';
import { TopButton } from '../../../components/Button';
import { Transition } from '../../../components/Transition';
import { Container, ListContainer, ListHeading, ListNotFound } from '../styles';
import { Loader } from '../../../components/Loader';

export const TicketsList = () => {
  const user = useAppSelector((state) => state.auth.user);
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const { data, isLoading, isSuccess, error } = useGetTicketsQuery(
    user?.id as number
  );

  let content;
  if (isLoading) content = <Loader />;
  else if (error || data?.length === 0)
    content = <ListNotFound>No tickets found</ListNotFound>;
  else if (isSuccess)
    content = (
      <>
        {tickets.map((ticket) => (
          <Transition key={ticket._id}>
            <TicketsListItem ticket={ticket} />
          </Transition>
        ))}
      </>
    );

  return (
    <Transition key="tickets-list">
      <Container>
        <ListContainer>
          {user?.username} Tickets
          <ListHeading>
            <span>Date</span>
            <span>Subject</span>
            <span>Status</span>
            <span></span>
          </ListHeading>
          {content}
          {tickets?.length > 5 && <TopButton />}
        </ListContainer>
      </Container>
    </Transition>
  );
};

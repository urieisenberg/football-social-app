import { useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useGetTicketsQuery } from '../../../app/services/tickets';
import { useTicketActions } from '../../../hooks/useTicketActions';
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

  const { getTickets } = useTicketActions();

  useEffect(() => {
    if (isSuccess) {
      getTickets(data as any);
    }
  }, [data, isSuccess, getTickets]);

  let content;
  if (isLoading) content = <Loader />;
  if (tickets.length === 0 || error)
    content = <ListNotFound>No tickets found</ListNotFound>;
  else
    content = (
      <>
        {tickets.map((ticket) => (
          <Transition key={ticket._id}>
            <TicketsListItem ticket={ticket} />
            {tickets?.length > 5 && <TopButton />}
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
        </ListContainer>
      </Container>
    </Transition>
  );
};

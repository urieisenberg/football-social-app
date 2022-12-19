import { useParams, useNavigate } from 'react-router-dom';
import {
  useGetTicketQuery,
  useCloseTicketMutation,
} from '../../../app/services/server-api/tickets';
import { useToggle } from '../../../hooks/useToggle';
import { toast } from 'react-toastify';
import {
  TicketContainer,
  TicketHR,
  ItemStatus,
  TicketContent,
  TicketActions,
  Container,
} from '../styles';
import { Loader } from '../../../components/Loader';
import { Modal } from '../../../components/Modal';
import { CreateNote } from '../../notes/Create';
import { Button } from '../../../components/Button';
import { Transition } from '../../../components/Transition';
import { UpdateTicket } from '../../../app/types';
import { Notes } from '../../notes/List';

export const Ticket = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams();
  const { data, isLoading, isSuccess, error } = useGetTicketQuery(
    ticketId as string
  );

  const [showNoteModal, toggleNoteModal] = useToggle();

  const [closeTicket] = useCloseTicketMutation();

  const onCloseTicket = async ({ id }: UpdateTicket) => {
    await closeTicket({ id });
  };

  let content;
  if (isLoading) content = <Loader />;
  else if (error) content = <div>Something went wrong</div>;
  else if (isSuccess)
    content = (
      <TicketContainer>
        <TicketContent>
          <Transition key="ticket">
            <div>
              <span>Ticket ID: {data?._id}</span>
              <TicketHR />
              <span>
                Date Submitted:{' '}
                {new Date(data?.createdAt as string).toLocaleString()}
              </span>
              <TicketHR />
              <span>
                Last Updated:{' '}
                {new Date(data?.updatedAt as string).toLocaleString()}
              </span>
              <TicketHR />
              <span>
                Status: <span></span>
                <ItemStatus status={data?.status}>{data?.status}</ItemStatus>
              </span>
              <TicketHR />
              <span>Subject: {data?.subject}</span>
              <TicketHR />
              <span>Description: {data?.message}</span>
              <TicketHR />
              Notes: <Notes ticketId={data?._id as string} />
              <TicketHR />
            </div>
            <Modal show={showNoteModal} setShow={toggleNoteModal}>
              <CreateNote
                setShow={toggleNoteModal}
                ticketId={data?._id as string}
              />
            </Modal>
            <TicketActions>
              <Button
                noBorder
                text="add note"
                variant="warning"
                onClick={() => toggleNoteModal()}
              />
              <Button
                noBorder
                text="edit ticket"
                variant="success"
                onClick={() => {
                  navigate(`/contact/tickets/${data?._id}/edit`);
                }}
              />
              <Button
                noBorder
                text="close ticket"
                variant="error"
                onClick={() => {
                  onCloseTicket({ id: data?._id as number });
                  toast.success('Ticket Closed');
                  navigate('/contact/tickets');
                }}
              />
            </TicketActions>
          </Transition>
        </TicketContent>
      </TicketContainer>
    );

  return <Container>{content}</Container>;
};

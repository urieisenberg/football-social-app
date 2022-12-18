import { useParams, useNavigate } from 'react-router-dom';
import {
  useGetTicketQuery,
  useDeleteTicketMutation,
} from '../../../app/services/tickets';
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
import { Button } from '../../../components/Button';
import { Transition } from '../../../components/Transition';
import { DeleteTicket } from '../../../app/types';

export const Ticket = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams();
  const { data, isLoading, isSuccess, error } = useGetTicketQuery(
    ticketId as string
  );
  const [deleteTicket] = useDeleteTicketMutation();

  const onDelete = async (data: DeleteTicket) => {
    await deleteTicket(data);
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
              {/* Notes */}
            </div>
            {/* Modal */}
            <TicketActions>
              <Button noBorder text="add note" variant="warning" />
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
                  onDelete({ id: data?._id as number });
                  toast.success('Ticket deleted');
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

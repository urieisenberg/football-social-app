import { useEffect } from 'react';
import { useCreateTicketMutation } from '../../../app/services/tickets';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ticketSchema } from '../utils/ticketSchema';
import { useTicketActions } from '../../../hooks/useTicketActions';
import { ticketsSelectOptions } from '../utils/selectOptions';
import {
  CreateTicket as Create,
  Ticket,
} from '../../../app/types';
import { Form } from '../../../components/Form';
import { Loader } from '../../../components/Loader';
import { toast } from 'react-toastify';
import { CreateContainer } from '../styles';

export const CreateTicket = () => {
  const { addTicket } = useTicketActions();

  const [createTicket, { data, isLoading, isSuccess, error }] =
    useCreateTicketMutation();

  useEffect(() => {
    if (isSuccess) {
      addTicket(data as Ticket);
      toast.success(`Ticket created`, {
        toastId: 'createTicketSuccess',
      });
    } else if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'createTicketError',
      });
    }
  }, [error, isSuccess, data, addTicket]);

  const onSubmit = async (data: Create) => {
    await createTicket({
      subject: data.subject,
      message: data.message,
    });
  };

  if (isLoading) return <Loader />;

  return (
    <CreateContainer>
      <Form
        title="Create Ticket"
        schema={ticketSchema}
        onSubmit={onSubmit}
        text="Please select the subject of your ticket and provide a description for your ticket. We will respond as soon as possible."
        selectOptions={ticketsSelectOptions}
        selectName="subject"
      />
    </CreateContainer>
  );
};

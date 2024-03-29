import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateTicketMutation } from '../api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ticketSchema } from '../utils/ticketSchema';
import { ticketsSelectOptions } from '../utils/selectOptions';
import { CreateTicket as AddTicket } from '../../../app/types';
import { Form } from '../../../components/Form';
import { Loader } from '../../../components/Loader';
import { toast } from 'react-toastify';
import { CreateContainer } from '../styles';

export const CreateTicket = () => {
  const navigate = useNavigate();

  const [createTicket, { data, isLoading, isSuccess, error }] =
    useCreateTicketMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/contact/tickets/');
      toast.success(`Ticket created`, {
        toastId: 'createTicketSuccess',
      });
    } else if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'createTicketError',
      });
    }
  }, [error, isSuccess, data, navigate]);

  const onSubmit = async (data: AddTicket) => {
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

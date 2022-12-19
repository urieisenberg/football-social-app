import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useUpdateTicketMutation,
  useGetTicketQuery,
} from '../../../app/services/server-api/tickets';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ticketSchema } from '../utils/ticketSchema';
import { ticketsSelectOptions } from '../utils/selectOptions';
import { CreateTicket as UpdateTicket } from '../../../app/types';
import { Form } from '../../../components/Form';
import { Loader } from '../../../components/Loader';
import { toast } from 'react-toastify';
import { CreateContainer as EditContainer } from '../styles';

export const EditTicket = () => {
  const navigate = useNavigate();
  const { ticketId } = useParams();
  const [updateTicket, { data, isLoading, isSuccess, error }] =
    useUpdateTicketMutation();
  const { data: ticketData } = useGetTicketQuery(ticketId as string);

  useEffect(() => {
    if (isSuccess) {
      navigate(`/contact/tickets/${ticketId}`);
      toast.success(`Ticket updated`, {
        toastId: 'updateTicketSuccess',
      });
    } else if (error) {
      const fetchError = error as FetchBaseQueryError;
      toast.error(fetchError?.data as string, {
        toastId: 'updateTicketError',
      });
    }
  }, [error, isSuccess, data, navigate, ticketId]);

  const onSubmit = async (data: UpdateTicket) => {
    await updateTicket({
      _id: ticketId as string,
      subject: data.subject,
      message: data.message,
    });
  };

  if (isLoading) return <Loader />;

  return (
    <EditContainer>
      <Form
        title="Edit Ticket"
        schema={ticketSchema}
        onSubmit={onSubmit}
        text="Please select the subject of your ticket and provide a description for your ticket. We will respond as soon as possible."
        selectOptions={ticketsSelectOptions}
        selectName="subject"
        editable={ticketData}
      />
    </EditContainer>
  );
};

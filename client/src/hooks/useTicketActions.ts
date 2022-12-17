import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './useAppDispatch';
import {
  setTickets,
  setTicket,
  removeTicket,
} from '../features/tickets/ticketsSlice';
import { Ticket } from '../app/types';

export const useTicketActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getTickets = (tickets: Ticket[]) => {
    dispatch(setTickets(tickets));
  };

  const getTicket = (id: number) => {
    dispatch(setTicket(id as unknown as Ticket));
  };

  const addTicket = (ticket: Ticket) => {
    dispatch(setTicket(ticket));
    navigate('/contact/tickets');
  };

  const updateTicket = (ticket: Ticket) => {
    dispatch(setTicket(ticket));
  };

  const deleteTicket = (id: number) => {
    dispatch(removeTicket(id));
  };

  return { getTicket, getTickets, addTicket, deleteTicket, updateTicket };
};

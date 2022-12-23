import React from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  MainContainer,
  MainName,
  MainDescription,
  MainLinks,
} from '../styles';
import { Button } from '../../../components/Button';
import { Transition } from '../../../components/Transition';

export const TicketsMain = () => {
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <Transition key="tickets-main">
      <Container>
        <MainContainer>
          <MainName>Hello {user?.username}</MainName>
          <MainDescription>
            Welcome to our support center. Here you can view your tickets and
            create new ones. We are here to help you with any questions you may
            have.
          </MainDescription>
          <MainLinks>
            <Button
              text="View My Tickets"
              variant="warning"
              onClick={() => navigate('tickets')}
              noBorder
            />
            <Button
              text="Create New Ticket"
              variant="success"
              onClick={() => navigate('create/ticket')}
              noBorder
            />
          </MainLinks>
          <MainDescription>
            We will provide an answer as soon as possible. Thank you for your
            patience.
          </MainDescription>
        </MainContainer>
      </Container>
    </Transition>
  );
};

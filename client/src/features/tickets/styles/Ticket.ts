import styled from 'styled-components';

export const TicketContainer = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  @media (max-width: 900px) {
    max-width: 400px;
    font-size: 9px;
  }
`;

export const TicketContent = styled.div`
  justify-content: center;
  margin: 40px auto;
  max-width: 700px;
  @media (max-width: 900px) {
    max-width: 400px;
    font-size: 9px;
  }
`;

export const TicketActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TicketHR = styled.hr``;

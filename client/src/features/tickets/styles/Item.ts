import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';

interface ItemProps {
  status: 'open' | 'closed';
}

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 700px;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  border-radius: 5px;
  text-align: center;
  padding: 10px 15px;
  @media (max-width: 700px) {
    max-width: 400px;
    font-size: 9px;
  }
`;

export const ItemHeading = styled.div`
  align-self: center;
  justify-self: center;
`;

export const ItemStatus = styled(Badge)<ItemProps>`
  justify-self: center;
  align-self: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 50px;
  max-height: 20px;
  background-color: ${({ theme, status }) =>
    status === 'open' ? theme.success : theme.error} !important;
  color: ${({ theme }) => theme.background};
`;

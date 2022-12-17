import styled from 'styled-components';

export const ListContainer = styled.div.attrs({
  className: 'text-center-container',
})`
margin: 0 auto;
justify-content: center;
max-width: 700px;
@media (max-width: 900px) {
  width: 70%;
  font-size:  9px;
}
`;

export const ListHeading = styled.div`
  font-weight: 700;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px;
`;

export const ListNotFound = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-top: 40px;
`;

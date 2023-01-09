import styled from 'styled-components';

export const AccountContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AccountTitle = styled.h3`
  margin-bottom: 40px;
`;


export const AccountDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const AccountInput = styled.input`
  background-color: ${({ theme }) => theme.background} !important;
  color: ${({ theme }) => theme.text} !important;
  border: none;
  outline: none;
`;

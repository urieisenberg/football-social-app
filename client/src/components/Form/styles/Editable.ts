import styled from 'styled-components';

export const FormEditableContainer = styled.section``;

export const FormEditableKey = styled.div``;

export const FormEditableAction = styled.span`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

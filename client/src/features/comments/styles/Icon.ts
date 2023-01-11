import styled from 'styled-components';

export const Icon = styled.span`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

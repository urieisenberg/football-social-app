import styled from 'styled-components';

export const Delete = styled.span`
  position: absolute;
  right: 2px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

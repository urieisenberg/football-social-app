import styled from 'styled-components';

export const Follow = styled.div`
  position: absolute;
  right: -25px;
  top: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

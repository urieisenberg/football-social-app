import styled from 'styled-components';

export const Options = styled.div`
  position: absolute;
  top: 5px;
  right: -25px;
`;

export const Option = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

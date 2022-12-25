import styled from 'styled-components';

interface CountdownStyledProps {
  isSoon: boolean;
}

export const CountdownContainer = styled.div.attrs({
  className: 'row fw-bold',
})``;

export const CountdownTime = styled.div.attrs({
  className: 'col fw-bold',
})<CountdownStyledProps>`
  color: ${({ isSoon, theme }) => (isSoon ? theme.error : theme.primary)};
  white-space: nowrap;
  letter-spacing: 0.1rem;
  @media (max-width: 990px) {
    font-size: 0.6rem;
  }
`;

export const CountdownText = styled.div.attrs({
  className: 'col fw-bold',
})<CountdownStyledProps>`
  color: ${({ isSoon, theme }) => (isSoon ? theme.error : theme.primary)};
  font-size: 0.7rem;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const CountdownMiniText = styled.div.attrs({
  className: 'col fw-bold',
})<CountdownStyledProps>`
  color: ${({ isSoon, theme }) => (isSoon ? theme.error : theme.primary)};
  font-size: 0.5rem;
  @media (min-width: 991px) {
    display: none;
  }
`;

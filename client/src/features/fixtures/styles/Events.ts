import styled from 'styled-components';

export const EventsContainer = styled.div.attrs({
  className: 'row',
})``;

export const EventsItem = styled.div.attrs({
  className: 'col',
})``;

export const EventsPlayer = styled.div.attrs({
  className: 'col',
})`
  font-size: 0.9rem;
  margin: 0.5rem;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const EventsTitle = styled.h5`
  letter-spacing: 0.1rem;
`;

export const EventsSubTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const EventsRating = styled.span`
  background-color: ${({ theme }) => theme.primary};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.text};
  @media (max-width: 600px) {
    font-size: 0.6rem;
    font-weight: normal;
  }
`;

export const EventsLink = styled.p`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

export const EventsLine = styled.hr``;



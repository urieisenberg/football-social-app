import styled from 'styled-components';

export const PlayersContainer = styled.div.attrs({
  className: 'container text-center justify-content-center align-items-center',
})`
  overflow: hidden;
`;

export const PlayersListContainer = styled.div.attrs({
  className:
    'row row-cols-auto mb-4 mt-4 m-auto align-items-center justify-content-center',
})``;

export const PlayersItemContainer = styled.div.attrs({
  className: 'row row-cols-auto mb-4 mt-4 m-auto',
})`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PlayersRow = styled.div.attrs({
  className: 'row',
})``;

export const PlayersTitle = styled.h5.attrs({
  className: 'mt-4 mb-4 text-center',
})``;

export const PlayersSubtitle = styled.h5`
  font-weight: bolder;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const PlayersTeam = styled.span`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

export const PlayersCol = styled.div.attrs({
  className: 'col',
})` 
font-size: 1.2rem;
letter-spacing: 1px;
`;

export const PlayersImage = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const PlayersBold = styled.span`
  font-weight: 600;
`;

export const PlayersRating = styled.span`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-left: 0.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const PlayersLine = styled.hr``;

export const PlayersSearchContainer = styled.div.attrs({
  className: 'mt-2 mb-2 fw-bold',
})``;

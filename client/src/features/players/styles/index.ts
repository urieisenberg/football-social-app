import styled from 'styled-components';

export const PlayersContainer = styled.div.attrs({
  className: 'container text-center justify-content-center align-items-center',
})`
  overflow: hidden;
`;

export const PlayersListContainer = styled.div.attrs({
  className: 'row row-cols-auto gx-3',
})``;

export const PlayersItem = styled.div.attrs({
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

export const PlayerSubTitle = styled.span`
  font-size: 1rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;
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
})``;

export const PlayersImage = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const PlayersBold = styled.span`
  font-weight: 600;
`;

export const PlayersRating = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const PlayersLine = styled.hr``;

export const PlayersSearchContainer = styled.div.attrs({
  className: 'mt-2 mb-2 fw-bold',
})``;

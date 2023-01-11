import styled from 'styled-components';

export const TrophiesContainer = styled.div``;

export const TrophiesTitle = styled.h5`
  letter-spacing: 1px;
  font-weight: bolder;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const TrophiesItem = styled.div.attrs({
  className: 'col',
})`
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

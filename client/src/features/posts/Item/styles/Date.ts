import styled from 'styled-components';

export const CreatedAt = styled.div.attrs({
  className: 'text-muted',
})`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.7rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

export const UpdatedAt = styled.div.attrs({
  className: 'text-muted',
})`
  position: absolute;
  bottom: -25px;
  right: 5px;
  font-size: 0.6rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

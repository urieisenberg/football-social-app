import styled from 'styled-components';

export const CreateContainer = styled.div.attrs({
  className: 'container',
})`
  display: flex;
  flex-direction: column;
  align-items: center !important;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 150px;
    font-size: 0.7rem;
  }
`;

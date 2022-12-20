import styled from 'styled-components';

export const SearchContainer = styled.div.attrs({
  className: '',
})`
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  max-width: 400px;
  @media only screen and (max-width: 600px) {
    max-width: 150px;
  }
`;

export const SearchInput = styled.input.attrs({
  className: 'form-control text-center',
})`
  background-color: transparent;
  border: none;
`;

import styled from 'styled-components';

export const ListWrapper = styled.div`
  text-align: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  margin: auto;
  display: flex;
`;

export const ListContent = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  width: 100%;
`;

export const ListNotFound = styled.div.attrs({
  className: 'mt-4',
})``;

export const ListTitle = styled.h4``;

export const ListSelect = styled.div`
  position: absolute;
  top: 40px;
`;

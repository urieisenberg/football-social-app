import styled from 'styled-components';

export const NotesContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.warning};
  width: 100%;
  text-align: left;
`;

export const NotesContent = styled.div`
  overflow: auto;
  max-height: 120px;
  ::-webkit-scrollbar {
    width: 0.2rem;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.warning};
`;

export const ItemHeader = styled.div.attrs({
  className: 'text-muted d-flex justify-content-between',
})`
  font-size: 0.8rem;
`;

export const ItemText = styled.div`
  font-size: 0.9rem;
  height: 100%;
`;

export const ItemDelete = styled.span`
  color: ${({ theme }) => theme.error};
  cursor: pointer;
`;

export const ItemDate = styled.div.attrs({
  className: 'text-muted',
})`
  font-size: 0.8rem;
`;

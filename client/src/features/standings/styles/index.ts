import styled from 'styled-components';

export const TableWrapper = styled.div.attrs({
  className: 'container text-center',
})``;

export const TableContainer = styled.table.attrs({
  className: 'table-responsive',
})`
  margin: 0 auto;
  width: 70%;
  text-align: center;
`;

export const TableLink = styled.span`
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

export const TableTitle = styled.h4`
  font-weight: 550;
`;

export const TableLogo = styled.img.attrs({
  width: 50,
})``;

export const TableImage = styled.img`
  align-self: left;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const TableHeadItem = styled.th`
  padding: 5px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
`;

export const TableLine = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
  padding: 5px;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    cursor: pointer;
  }
`;

export const TableCurrentTeam = styled.tr`
  background-color: ${({ theme }) => theme.primary};
  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    cursor: pointer;
  }
`;

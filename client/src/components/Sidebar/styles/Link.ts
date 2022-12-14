import styled from 'styled-components';

export const SidebarLink = styled.div`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

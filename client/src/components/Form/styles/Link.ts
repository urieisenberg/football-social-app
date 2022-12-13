import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-left: 0.5rem;
  &:hover {
    text-decoration: underline;
    font-weight: 700;
  }
`;

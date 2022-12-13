import styled from 'styled-components';
import Form from "react-bootstrap/Form";

export const FormContent = styled(Form)`
  width: 30rem;
  background: ${({ theme }) => theme.background};
  margin: 0 auto;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.text};
  align-items: center;

`;

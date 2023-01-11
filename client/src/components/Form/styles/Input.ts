import styled from 'styled-components';
import Form from "react-bootstrap/Form";

export const FormInput = styled(Form.Control).attrs({
  autoComplete: 'off',
})`
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  display: inline-block;
  background: transparent;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text} !important;
  &:focus,
  &:active {
    outline: none;
    border: none;
    background: transparent;
  }

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
  }
`;



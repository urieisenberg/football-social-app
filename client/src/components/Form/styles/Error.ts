import styled from 'styled-components';
import Form from 'react-bootstrap/Form';


export const FormError = styled(Form.Control.Feedback).attrs({
  type: 'invalid',
})`
  color: ${({ theme }) => theme.error};
  text-align: left;
  font-size: 0.8rem;
  display: inline-block;
  @media (max-width: 576px) {
    text-align: center;
  }
  @media (min-width: 576px) {
    padding: 0 0 0 0.5rem;
  }
`;

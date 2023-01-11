import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const FormTitle = styled(Form.Label)`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 576px) {
    display: none;
  }
`;



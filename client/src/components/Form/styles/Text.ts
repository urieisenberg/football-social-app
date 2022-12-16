import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const FormText = styled(Form.Text)`
  font-size: 0.9rem !important;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textColor};
  @media (min-width: 576px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 576px) {
    display: none;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

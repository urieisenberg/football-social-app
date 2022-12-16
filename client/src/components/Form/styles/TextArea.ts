import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const FormTextArea = styled(Form.Control).attrs({
  as: 'textarea',
  rows: 3,
  type: 'textarea',
})`
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  width: 100%;
  margin-bottom: 1rem;
`;

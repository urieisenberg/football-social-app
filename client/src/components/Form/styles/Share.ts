import styled from 'styled-components';
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';

export const FormShare = styled(Form)``;

export const FormShareContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
  border-radius: 10px;
  width: 400px;
  &:active {
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
  }
  &:focus {
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
  }
`;

export const FormShareInput = styled(Form.Control).attrs({
  as: 'textarea',
  maxLength: 100,
})`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;
  margin-top: 20px;
  margin-left: 0.5rem;
  width: 90%;
  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`;

export const FormShareAltInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 0.5rem;
`;

export const FormShareButton = styled(motion.button).attrs({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1.1 },
})`
  position: absolute;
  right: 0.5rem;
  border: none;
  outline: none;
  font-size: 1.8rem;
  background: transparent;
  color: ${({ theme }) => theme.text};
  background: tansparent;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    cursor: pointer;
  }
`;

export const FormShareSubmit = styled(motion.button).attrs({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1.1 },
})`
  position: absolute;
  left: 200px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  outline: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    cursor: pointer;
  }
`;

export const FormShareError = styled(Form.Control.Feedback).attrs({
  type: 'invalid',
})`
  color: ${({ theme }) => theme.error};
  font-size: 0.7rem;
  position: absolute;
  bottom: -1.5rem;
  text-align: center;
`;

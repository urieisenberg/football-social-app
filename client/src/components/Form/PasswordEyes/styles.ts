import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PasswordEyesContainer = styled(motion.div).attrs({
  whileHover: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
    cursor: 'pointer',
  },
  whileTap: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
})`
  margin-top: 3px;
  margin-left: 11px;
  position: absolute;
  right: -20px;
  background: transparent;
  @media (max-width: 576px) {
    display: none;
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Toggle = styled(motion.div).attrs({
  whileTap: { scale: 0.95, transition: { duration: 0.1 } },
  whileHover: { scale: 1.1, transition: { duration: 0.1 } },
})`
  color: ${({ theme }) => theme.text};
  top: 4px;
  right: 14px;
  position: absolute;
  cursor: pointer;
  z-index: 10;
  background: transparent;
  float: right;
  flex-direction: column;
  outline: none;
`;

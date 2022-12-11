import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface IconButtonProps {
  size?: string;
  home?: boolean;
}

export const IconButton = styled(motion.button).attrs({
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 1.3,
    borderRadius: '6px',
  },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
})<IconButtonProps>`
  background: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  flex-direction: column;
  float: left;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 20px;
  margin-left: ${({ home }) => (home ? '60px' : '0px')};
  &:hover {
    color: ${({ theme }) => theme.primary};
    font-weight: 700;
  }
`;

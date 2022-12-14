import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarItem = styled(motion.div).attrs({
  whileHover: {
    scale: 1.1,
    cursor: 'pointer',
  },
  whileTap: {
    scale: 0.95,
  },
  transition: {
    type: 'none',
    duration: 0.1,
  },
})`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    cursor: pointer;
  }
`;

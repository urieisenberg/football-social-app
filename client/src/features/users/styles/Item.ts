import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Item = styled(motion.a).attrs({
  whileHover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
  whileTap: {
    scale: 0.9,
  },
})`
color: ${({ theme }) => theme.text};
  &:hover {
    cursor: pointer;
  }
`;

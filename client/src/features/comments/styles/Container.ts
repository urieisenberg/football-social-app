import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0,
    y: '-10%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '-10%',
    transition: {
      duration: 0.2,
    },
  },
}))`
  text-align: left;
  margin-top: 2rem;
  height: 100%;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

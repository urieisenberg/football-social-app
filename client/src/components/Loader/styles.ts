import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LoaderWrapper = styled(motion.div)`
  margin: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const LoaderContainer = styled(motion.div).attrs({
  initial: 'initial',
  animate: 'animate',
  variants: {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
})`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;

export const LoaderBall = styled(motion.div).attrs({
  variants: {
    initial: {
      y: '0%',
    },
    animate: {
      y: '100%',
    },
  },
  transition: {
    duration: 1.4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
})`
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

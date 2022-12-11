import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MotionTransition = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  transition: {
    type: 'tween',
    duration: 0.5,
    ease: 'anticipate',
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  variants: {
    initial: {
      opacity: 0,
      scale: 0.8,
      x: '-100vw',
    },
    in: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      scale: 1.2,
      x: '100vw',
    },
  },
})`
  position: absolute;
`;

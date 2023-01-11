import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarHeading = styled(motion.span).attrs({
  variants: {
    true: {
      opacity: 1,
      display: 'flex',
      marginTop: '0.5rem',
      marginLeft: '0.5rem',
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    false: {
      display: 'none',
    },
  },
})``;



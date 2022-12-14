import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarIcon = styled(motion.span).attrs({
  variants: {
    true: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    false: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '0.4rem',
      marginLeft: '0.4rem',
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
})`
  margin-left: 0.4rem;
  flex-direction: column;
  align-items: center;
  margin-top: 0.4rem;
  display: flex;
`;

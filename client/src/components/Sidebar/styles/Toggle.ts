import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarToggle = styled(motion.div).attrs({
  variants: {
    true: {
      left: 0,
      alignSelf: 'left',
    },
    false: {
      alignSelf: 'left',
    },
  },
  whileHover: {
    scale: 1.2,
    rotate: 180,
    backgroundColor: 'rgba(127, 170, 240, 0.3)',
    backdropFilter: 'blur(3.5px)',
    WebkitBackdropFilter: 'blur(3.5px)',
    border: '1px solid rgba( 127, 170, 240, 0.18 )',
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
    cursor: 'pointer',
  },
  whileTap: {
    cursor: 'pointer',
    scale: 0.8,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
})`
  display: flex;
  align-self: center;
  border-radius: 5px;
  alignself: left !important;
`;



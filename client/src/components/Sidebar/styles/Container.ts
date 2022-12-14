import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarContainer = styled(motion.div).attrs({
  variants: {
    true: {
      marginTop: '0rem',
    },
    false: {
      marginTop: '4rem',
    },
  },
})`
  position: sticky;
  top: 0;
  left: 0;
  float: left;
  align-items: center;
  z-index: 12222;
  box-sizing: border-box;
  padding-right: 0.2rem;
`;

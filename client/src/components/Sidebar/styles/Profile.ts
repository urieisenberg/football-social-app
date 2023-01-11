import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarProfile = styled(motion.div).attrs({
  whileHover: {
    transition: {
      duration: 0.2,
    },
    scale: 1.1,
    cursor: 'pointer',
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
  variants: {
    true: {
      alignSelf: 'center',
      marginTop: '1rem',
      width: '7rem',
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    false: {
      alignSelf: 'center',
      marginTop: '1rem',
      width: '4.5rem',
      transition: {
        y: { stiffness: 10000 },
      },
    },
  },
})`


   @media (max-width: 700px)  {
    display: none;
    }

    @media (max-height: 500px) {
      display:none;
    }
  
    & > img {
      width: 100%;
      height: 100%;
      `;

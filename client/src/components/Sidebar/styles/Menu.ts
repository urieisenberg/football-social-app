import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SidebarMenu = styled(motion.div).attrs({
  variants: {
    true: {
      width: '12rem',
      transition: {
        type: 'spring',
        duration: 0.2,
      },
      overflow: 'hidden',
    },
    false: {
      width: '4rem',
      transition: {
        type: 'spring',
        duration: 0.2,
        delay: 0.1,
      },
    },
  },
})`
  display: flex;
  width: 12rem;
  height: 100%;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding: 15px;
  line-height: 1.5;
  list-style: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 8px 32px 0 rgba(127, 170, 240, 0.37);
  border-radius: 10px;
  border: ${({ theme }) =>
    theme === 'dark'
      ? ' 1px solid rgba(127, 170, 240, 0.18)'
      : '1px solid rgba(44, 53, 99, 0.18)'};
`;

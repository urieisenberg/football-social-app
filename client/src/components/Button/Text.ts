import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface TextButtonProps {
  mini?: boolean;
  noBorder?: boolean;
  variant?: 'primary' | 'error' | 'success' | 'warning';
}

export const TextButton = styled(motion.button).attrs({
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 1.3,
    borderRadius: '6px',
  },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
})<TextButtonProps>`
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  font-size: ${({ mini }) => (mini ? '0.8rem' : '1rem')};
  padding: ${({ mini }) => (mini ? '0.2rem 0.5rem' : '0.5rem 1rem')};
  max-width: ${({ mini }) => (mini ? '60px' : '100%')};
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.1rem;
  background-color: ${({ theme, variant }) =>
    variant ? theme[variant] : theme.background};
  color: ${({ theme }) => theme.text};
  border: ${({ noBorder, theme }) =>
    noBorder ? 'none' : `1px solid ${theme.text}`};
  &:hover {
    background-color: ${({ theme, variant }) =>
      variant ? theme[variant] : theme.text};
    color: ${({ theme }) => theme.background};
    font-weight: 700;
  }

  @media (max-width: 600px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
  }
`;

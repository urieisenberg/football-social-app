import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Nav, Navbar, Container } from 'react-bootstrap';

interface NavItemProps {
  hide?: 'none' | 'block';
  mini?: 'true' | 'false';
}

interface NavLinkProps {
  active?: 'true' | 'false';
}

export const NavWrapper = styled(Navbar).attrs({
  expand: 'lg',
  className:
    'container text-center justify-content-center d-flex align-items-center ',
})`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const NavContainer = styled(Container)`
  @media (max-width: 990px) {
    display: inline-block;
    font-size: 0.8rem;
  }
`;

export const NavLink = styled(Nav.Link)<NavLinkProps>`
  color: ${({ active, theme }) => (active === 'true' ? theme.primary : theme.text)};
  font-weight: ${({ active }) => (active === 'true' ? 'bold' : 'normal')};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-weight: bold;
  }
`;

export const NavItem = styled(motion.span).attrs({
  whileTap: {
    scale: 1.3,
  },
  whileHover: {
    scale: 1.3,
  },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
})<NavItemProps>`
  margin: 10px;
  font-size: ${({ mini }) => (mini === 'true' ? '0.9rem' : '1rem')};
  @media (max-width: 990px) {
    font-size: ${({ mini }) => (mini === 'true' ? '0.8rem' : '0.9rem')};
    display: ${({ hide }) => hide === 'none' && 'none'};
  }
`;

export const NavContent = styled(Container)``;

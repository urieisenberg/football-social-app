import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Nav, Navbar, Container } from 'react-bootstrap';

interface NavItemProps {
  hide?: string;
}

interface NavLinkProps {
  active?: boolean;
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
  color: ${({ active, theme }) => (active ? theme.info : theme.text)};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.info};
  }
`;

export const NavItem = styled(motion.span).attrs({
  whileTap: { scale: 0.95, transition: { duration: 0.1 } },
  whileHover: { scale: 1.1, transition: { duration: 0.1 } },
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 10,
    mass: 1,
  },
})<NavItemProps>`
  margin: auto 0.5rem;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
  @media (max-width: 990px) {
    display: ${({ hide }) => hide && 'none'};
  }
`;

export const NavContent = styled(Container)``;

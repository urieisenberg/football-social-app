import { NavLink as Link, useLocation } from 'react-router-dom';
import {
  NavContainer,
  NavWrapper,
  NavItem,
  NavContent,
  NavLink,
} from './styles';

interface NavProps {
  links: string[];
}

export const Nav = ({ links }: NavProps) => {
  const { pathname } = useLocation();

  return (
    <NavWrapper>
      <NavContent>
        <NavContainer>
          {links.map((link) => (
            <NavItem key={link}>
              <NavLink
                as={Link}
                to={link.replaceAll(' ', '/')}
                active={pathname === link.replaceAll(' ', '/') ? true : false}
              >
                {link}
              </NavLink>
            </NavItem>
          ))}
        </NavContainer>
      </NavContent>
    </NavWrapper>
  );
};

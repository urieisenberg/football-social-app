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
  mini?: 'true' | 'false';
}

export const Nav = ({ links, mini }: NavProps) => {
  const { pathname } = useLocation();

  return (
    <NavWrapper>
      <NavContent>
        <NavContainer>
          {links.map((link) => (
            <NavItem key={link} mini={mini}>
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

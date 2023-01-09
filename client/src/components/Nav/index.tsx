import { NavLink as Link } from 'react-router-dom';
import { usePathname } from '../../routes/hooks/usePathname';
import {
  NavContainer,
  NavWrapper,
  NavItem,
  NavContent,
  NavLink,
} from './styles';
import { IoSettingsOutline } from 'react-icons/io5';

interface NavProps {
  links: string[];
  mini?: 'true' | 'false';
}

export const Nav = ({ links, mini }: NavProps) => {
  const { pathMatch } = usePathname();

  return (
    <NavWrapper>
      <NavContent>
        <NavContainer>
          {links.map((link) => (
            <NavItem
              key={link}
              mini={mini}
              hide={
                link === 'staff' ||
                link === 'stadium' ||
                link === 'feed' ||
                link === 'social'
                  ? 'none'
                  : 'block'
              }
            >
              <NavLink
                as={Link}
                to={link.replaceAll(' ', '/')}
                active={pathMatch(link, 'includes') ? 'true' : 'false'}
              >
                {link === 'settings' ? <IoSettingsOutline /> : link}
              </NavLink>
            </NavItem>
          ))}
        </NavContainer>
      </NavContent>
    </NavWrapper>
  );
};

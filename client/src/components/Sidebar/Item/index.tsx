import { NavLink } from 'react-router-dom';
import {
  SidebarHeading,
  SidebarIcon,
  SidebarItem,
  SidebarLink,
} from '../styles';

interface SidebarItemProps {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  link: string;
  action?: () => void;
}

export const Item = ({ title, icon, link, action }: SidebarItemProps) => {
  return (
    <SidebarItem>
      <SidebarIcon>
        <SidebarLink
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title={action ? 'Logout' : (title as string)}
          onClick={action}
          as={NavLink}
          to={`/${link}`}
        >
          {icon}
        </SidebarLink>
      </SidebarIcon>
      <SidebarHeading>
        <SidebarLink onClick={action} as={NavLink} to={`/${link}`}>
          {title}
        </SidebarLink>
      </SidebarHeading>
    </SidebarItem>
  );
};

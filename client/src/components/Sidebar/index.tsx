import { useNavigate } from 'react-router-dom';
import {
  useToggle,
  useAppSelector,
  useAuthActions,
} from '../../app/hooks';
import { Item } from './Item';
import { BackButton } from '../Button';
import { GiSoccerKick, GiSoccerField } from 'react-icons/gi';
import {
  GoThreeBars,
  GoListUnordered,
  GoCommentDiscussion,
} from 'react-icons/go';
import {
  IoPowerOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
  IoTrophyOutline,
} from 'react-icons/io5';
import { BiEuro } from 'react-icons/bi';
import { FaUserNinja } from 'react-icons/fa';
import {
  SidebarContainer,
  SidebarMenu,
  SidebarToggle,
  SidebarProfile,
  SidebarGroup,
} from './styles';

export const Sidebar = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);
  const { logout } = useAuthActions();

  const [isOpen, toggleSidebar] = useToggle();
  return (
    <SidebarContainer
      data-show-menu={isOpen}
      initial={`${isOpen}`}
      animate={`${isOpen}`}
    >
      <SidebarMenu initial={`${isOpen}`} animate={`${isOpen}`}>
        {isOpen && <BackButton size={18} />}
        <SidebarToggle
          onClick={() => {
            if (typeof toggleSidebar === 'function') toggleSidebar();
          }}
        >
          {isOpen ? <GoThreeBars size={30} /> : <GoListUnordered size={30} />}
        </SidebarToggle>
        <SidebarProfile
          onClick={() => navigate(`/profile/${user?.username}`)}
          initial={`${isOpen}`}
          animate={`${isOpen}`}
        >
          <img src={user?.team?.logo} alt="team logo" />
        </SidebarProfile>
        <SidebarGroup>
          <Item
            title="Seria A"
            icon={<GiSoccerField size={20} />}
            link="league/135"
          />
          <Item
            title="Players"
            icon={<GiSoccerKick size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/players`}
          />
          <Item
            title="Transfers"
            icon={<BiEuro size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/transfers`}
          />
          <Item
            title="Table"
            icon={<IoTrophyOutline size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/standings`}
          />
          <Item
            title="Serie A Feed"
            icon={<GoCommentDiscussion size={20} />}
            link="feed/newest"
          />
          <Item
            title={`${user?.team?.name} Feed`}
            icon={<FaUserNinja size={20} />}
            link={`team/${user?.team.id}/${user?.team.name}/feed`}
          />
          <Item
            title="Profile"
            icon={<IoPersonOutline size={20} />}
            link={`profile/${user?.username}`}
          />
          <Item
            title="Contact"
            icon={<IoHelpCircleOutline size={20} />}
            link="contact"
          />
          <Item
            title="Account"
            icon={<IoSettingsOutline size={20} />}
            link={`account/${user?._id}/${user?.username}`}
          />
          <Item
            title={<span className="logout">Logout</span>}
            icon={<IoPowerOutline size={20} className="logout" />}
            link="welcome"
            action={logout}
          />
        </SidebarGroup>
      </SidebarMenu>
    </SidebarContainer>
  );
};

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAuth } from '../../hooks/useAuth';
import { useToggle } from '../../hooks/useToggle';
import { logout } from '../../features/auth/authSlice';
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
  const dispatch = useAppDispatch();

  const { user } = useAuth();
  const currentUser = useTypedSelector((state) => state.auth.user);

  const [isOpen, toggleSidebar] = useToggle(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/welcome');
  };

  return user ? (
    <SidebarContainer
      data-show-menu={isOpen}
      initial={`${isOpen}`}
      animate={`${isOpen}`}
    >
      <SidebarMenu initial={`${isOpen}`} animate={`${isOpen}`}>
        {isOpen && <BackButton />}
        <SidebarToggle onClick={toggleSidebar}>
          {isOpen ? <GoThreeBars size={30} /> : <GoListUnordered size={30} />}
        </SidebarToggle>
        <SidebarProfile
          onClick={() => navigate('/profile')}
          initial={`${isOpen}`}
          animate={`${isOpen}`}
        >
          <img src={currentUser?.team?.logo} alt="team logo" />
        </SidebarProfile>
        <SidebarGroup>
          <Item
            title="Seria A"
            icon={<GiSoccerField size={20} />}
            link="league"
          />
          <Item
            title="Players"
            icon={<GiSoccerKick size={20} />}
            link={`team/${currentUser?.team.id}/${currentUser?.team.name}/players`}
          />
          <Item
            title="Transfers"
            icon={<BiEuro size={20} />}
            link={`team/${currentUser?.team.id}/${currentUser?.team.name}/transfers`}
          />
          <Item
            title="Table"
            icon={<IoTrophyOutline size={20} />}
            link={`team/${currentUser?.team.id}/${currentUser?.team.name}/standings`}
          />
          <Item
            title="Serie A Feed"
            icon={<GoCommentDiscussion size={20} />}
            link="feed/newest"
          />
          <Item
            title={`${currentUser?.team?.name} Feed`}
            icon={<FaUserNinja size={20} />}
            link={`team/${currentUser?.team.id}/${currentUser?.team.name}/feed`}
          />
          <Item
            title="Profile"
            icon={<IoPersonOutline size={20} />}
            link={`profile/${currentUser?.username}`}
          />
          <Item
            title="Contact"
            icon={<IoHelpCircleOutline size={20} />}
            link="contact"
          />
          <Item
            title="Account"
            icon={<IoSettingsOutline size={20} />}
            link={`account/${currentUser?.id}`}
          />
          <Item
            title={<span className="logout">Logout</span>}
            icon={<IoPowerOutline size={20} className="logout" />}
            link="welcome"
            action={handleLogout}
          />
        </SidebarGroup>
      </SidebarMenu>
    </SidebarContainer>
  ) : null;
};

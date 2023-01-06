import { useAppSelector } from '../../../app/hooks';
import { Transition } from '../../../components/Transition';
import { BarWrapper, BarContainer, BarTitle, BarLogo } from '../styles';

export const UserBar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Transition key="user">
      <BarWrapper>
        <BarContainer>
          <BarTitle>{user?.username}</BarTitle>
          <BarLogo src={user?.profilePicture} alt={user?.username} />
        </BarContainer>
      </BarWrapper>
    </Transition>
  );
};

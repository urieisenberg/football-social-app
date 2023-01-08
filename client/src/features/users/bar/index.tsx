// import { useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../api';
import { Transition } from '../../../components/Transition';
import { BarWrapper, BarContainer, BarTitle, BarLogo } from '../styles';

export const UserBar = () => {
  //const { user } = useAppSelector((state) => state.auth);
  const { username } = useParams();

  const { data: user, isLoading } = useGetUserQuery(username as string);

  return (
    <Transition key="user">
      <BarWrapper>
        <BarContainer>
          <BarTitle>{user?.username}</BarTitle>
          <BarLogo src={user?.team.logo} alt={user?.username} />
        </BarContainer>
      </BarWrapper>
    </Transition>
  );
};

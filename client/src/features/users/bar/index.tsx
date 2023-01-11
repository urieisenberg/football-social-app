import { useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../api';
import { FollowUser } from '../item/follow';
import { Transition } from '../../../components/Transition';
import { BarWrapper, BarContainer, BarTitle, BarLogo } from '../styles';

export const UserBar = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  const { username } = useParams();

  const { data: user, isLoading } = useGetUserQuery(username as string);

  return (
    <Transition key="user">
      <BarWrapper>
        <BarContainer>
          <BarTitle>{user?.username}</BarTitle>
          <BarLogo src={user?.team.logo} alt={user?.username} />
          {currentUser?._id !== user?._id && (
            <BarTitle>
              <FollowUser
                id={user?._id as string}
                username={user?.username as string}
                size={30}
              />
            </BarTitle>
          )}
        </BarContainer>
      </BarWrapper>
    </Transition>
  );
};

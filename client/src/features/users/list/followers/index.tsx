import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { useGetFollowersQuery } from '../../api';
import { ListProfile, ListWrapper, ListContainer, ListTitle } from '../../styles';
import { Loader } from '../../../../components/Loader';
import { Card } from '../../../../components/Card';
import { Transition } from '../../../../components/Transition';

export const FollowersList = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading } = useGetFollowersQuery(user?._id as string);

  let content;
  if (isLoading) content = <Loader />;
  else if (data?.length === 0)
    content = <ListTitle> {user?.username} has no followers</ListTitle>;
  else if (data && user)
    content = (
      <Transition key="followers">
        <ListWrapper>
          <ListContainer>
            <ListTitle>
              {user.followers.length}{' '}
              {user.followers.length === 1 ? 'follower' : 'followers'}
            </ListTitle>
            <ListProfile>
              {data.map((follower) => (
                <Card
                  key={follower._id}
                  image={follower?.team?.logo}
                  name={follower.username}
                  navigate={() => navigate(`/users/${follower.username}`)}
                />
              ))}
            </ListProfile>
          </ListContainer>
        </ListWrapper>
      </Transition>
    );

  return <>{content}</>;
};

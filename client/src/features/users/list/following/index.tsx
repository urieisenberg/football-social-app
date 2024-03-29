import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { useGetFollowingQuery } from '../../api';
import {
  ListProfile,
  ListWrapper,
  ListContainer,
  ListTitle,
} from '../../styles';
import { Loader } from '../../../../components/Loader';
import { Card } from '../../../../components/Card';
import { Transition } from '../../../../components/Transition';

export const FollowingList = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading } = useGetFollowingQuery(user?._id as string);

  let content;
  if (isLoading) content = <Loader />;
  else if (data?.length === 0)
    content = <ListTitle> {user?.username} is not following anyone</ListTitle>;
  else if (data && user)
    content = (
      <Transition key="following">
        <ListWrapper>
          <ListContainer>
            <ListTitle>
              {user.following.length}{' '}
              {user.following.length === 1 ? 'following' : 'following'}
            </ListTitle>
            <ListProfile>
              {data.map((following) => (
                <Card
                  key={following._id}
                  image={following?.team?.logo}
                  name={following.username}
                  navigate={() => navigate(`/profile/${following.username}`)}
                />
              ))}
            </ListProfile>
          </ListContainer>
        </ListWrapper>
      </Transition>
    );

  return <>{content}</>;
};

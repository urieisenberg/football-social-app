import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { useGetFollowersQuery, useGetUserQuery } from '../../api';
import {
  ListWrapper,
  ListContainer,
  ListTitle,
  ListItem,
  ListSubtitle,
} from '../../styles';
import { Loader } from '../../../../components/Loader';

export const FollowersList = () => {
  const { username } = useParams();
  const { user } = useAppSelector((state) => state.auth);

  const { data: userData, isLoading: userIsLoading } = useGetUserQuery(
    username as string
  );

  const { data, isLoading } = useGetFollowersQuery(userData?._id as string);

  let content;

  return <div>FollowersList</div>;
};

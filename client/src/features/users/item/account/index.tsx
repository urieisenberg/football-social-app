import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../../api';
import {
  useNavigateToTeam,
  useNavigateToProfile,
} from '../../../../routes/hooks';
import { Transition } from '../../../../components/Transition';
import { AccountContainer, AccountTitle, Item } from '../../styles';

export const UserAccount = () => {
  const { username } = useParams();

  const { navigateToTeam } = useNavigateToTeam();
  const { navigateToProfile } = useNavigateToProfile();

  const { data: user } = useGetUserQuery(username as string);

  return (
    <Transition key="account">
      <AccountContainer>
        <AccountTitle>
          Member since:{' '}
          {new Date(user?.createdAt as string).toLocaleDateString()}
        </AccountTitle>
        <AccountTitle>Username: {user?.username}</AccountTitle>
        <AccountTitle>Email: {user?.email}</AccountTitle>
        <AccountTitle>
          Team:
          <Item
            onClick={() =>
              navigateToTeam(user?.team.id as number, user?.team.name as string)
            }
          >
            {user?.team?.name}
          </Item>
        </AccountTitle>
        <AccountTitle>
          Favorite Fixtures:
          <Item
            onClick={() =>
              navigateToProfile(user?.username as string, 'fixtures')
            }
          >
            {user?.favFixtures?.length}
          </Item>
        </AccountTitle>
        <AccountTitle>
          Followers:
          <Item
            onClick={() =>
              navigateToProfile(user?.username as string, 'followers')
            }
          >
            {user?.followers?.length}
          </Item>
        </AccountTitle>
        <AccountTitle>
          Following:
          <Item
            onClick={() =>
              navigateToProfile(user?.username as string, 'following')
            }
          >
            {user?.following?.length}
          </Item>
        </AccountTitle>
      </AccountContainer>
    </Transition>
  );
};

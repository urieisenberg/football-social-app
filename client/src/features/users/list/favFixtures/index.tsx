import { useAppSelector } from '../../../../app/hooks';
import { useNavigateToFixture } from '../../../../app/hooks';
import { useGetFavFixturesQuery } from '../../api';
import {
  ListWrapper,
  ListContainer,
  ListTitle,
  ListItem,
  ListImg,
  ListSubtitle,
  ListDate,
} from '../../styles';
import { Loader } from '../../../../components/Loader';
import { Transition } from '../../../../components/Transition';

export const FavFixturesList = () => {
  const { user } = useAppSelector((state) => state.user);
  const { navigateToFixture } = useNavigateToFixture();

  const { data, isSuccess, isLoading } = useGetFavFixturesQuery(user?._id as string);

  console.log(data);

  let content;
  if (isLoading) content = <Loader />;
  else if (data?.length === 0)
    content = (
      <ListTitle> {user?.username} has no favourite fixtures</ListTitle>
    );
  else if (data && user && isSuccess)
    content = (
      <Transition key="favFixtures">
        <ListWrapper>
          <ListTitle>
            {user.favFixtures.length}{' '}
            {user.favFixtures.length === 1
              ? 'favourite fixture'
              : 'favourite fixtures'}
          </ListTitle>
          {/* clear all  */}
          <ListContainer>
            {data.map((fixture) => (
              <ListItem
                key={fixture.id}
                onClick={() =>
                  navigateToFixture(
                    fixture.homeTeam.id as unknown as string,
                    fixture.homeTeam.name,
                    fixture.id
                  )
                }
              >
                <ListDate>
                  {new Date(fixture.date).toLocaleDateString()}
                </ListDate>
                <ListImg
                  src={fixture.homeTeam.logo}
                  alt={fixture.homeTeam.name}
                />
                <ListImg
                  src={fixture.awayTeam.logo}
                  alt={fixture.awayTeam.name}
                />
                <ListSubtitle>
                  {fixture.homeTeam.name} vs {fixture.awayTeam.name}
                </ListSubtitle>
              </ListItem>
            ))}
          </ListContainer>
        </ListWrapper>
      </Transition>
    );


  return <> {content} </> ;
};

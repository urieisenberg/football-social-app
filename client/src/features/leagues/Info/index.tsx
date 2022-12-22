import { useParams, useNavigate } from 'react-router-dom';
import { useGetLeagueInfoQuery } from '../api';
import { SERIA_A } from '../../../app/types';
import { Transition } from '../../../components/Transition';
import {
  InfoWrapper,
  InfoContainer,
  InfoTitle,
  InfoLogo,
  InfoCountry,
  InfoFlag,
} from '../styles';

export const LeagueInfo = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();

  const { data, isSuccess, isError } = useGetLeagueInfoQuery(
    leagueid as string
  );

  let content;
  if (isError) content = null;
  else if (isSuccess && data)
    content = (
      <Transition key="league-info">
        <InfoWrapper>
          <InfoContainer>
            {leagueid !== SERIA_A && (
              <InfoLogo src={data?.league.logo} alt={data?.league.name} />
            )}
            <InfoTitle onClick={() => navigate(`/league/${leagueid}`)}>
              {data?.league.name}
            </InfoTitle>
            <InfoCountry>{data?.country.name}</InfoCountry>
            <InfoFlag src={data?.country.flag} alt={data?.country.name} />
          </InfoContainer>
        </InfoWrapper>
      </Transition>
    );

  return <section>{content}</section>;
};

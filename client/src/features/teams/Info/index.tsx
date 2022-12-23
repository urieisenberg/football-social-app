import { useParams } from 'react-router-dom';
import { Transition } from '../../../components/Transition';
import { useGetTeamInfoQuery } from '../api';
import {
  InfoWrapper,
  InfoContainer,
  InfoTitle,
  InfoLogo,
  InfoCountry,
} from '../styles';

export const TeamInformation = () => {
  const { teamid } = useParams();

  const { data, isLoading, isError } = useGetTeamInfoQuery(teamid as string);

  let content;
  if (isLoading || isError) content = null;
  else
    content = (
      <Transition key={data?.team.id}>
        <InfoWrapper>
          <InfoContainer>
            <InfoLogo src={data?.team.logo} alt={data?.team.name} />
            <InfoTitle>
              {data?.team.name + ' since ' + data?.team?.founded}
            </InfoTitle>
            <InfoCountry>
              {data?.venue?.city + ', ' + data?.team?.country}
            </InfoCountry>
          </InfoContainer>
        </InfoWrapper>
      </Transition>
    );

  return content;
};

import { useParams, useNavigate } from 'react-router-dom';
import { useGetVenuesQuery } from '../api';
import { useGetLeagueInfoQuery } from '../../leagues/api';
import {
  VenuesContainer,
  VenuesTitle,
  VenuesListContainer,
  VenuesImage,
  VenuesName,
  VenuesItemContainer,
} from '../styles';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import { TopButton } from '../../../components/Button';

export const VenuesList = () => {
  const navigate = useNavigate();
  const { leagueid } = useParams();
  const { data: league } = useGetLeagueInfoQuery(leagueid as string);
  const country = league?.country.name as string;
  const { data: venues, isLoading, isSuccess } = useGetVenuesQuery(country);

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && venues)
    content = (
      <Transition key="venues">
        <VenuesContainer>
          <VenuesTitle>Venues From {country}</VenuesTitle>
          <VenuesListContainer>
            {venues.map((venue) => (
              <VenuesItemContainer
                key={venue.id}
                onClick={() =>
                  navigate(`/league/${leagueid}/venues/${venue.id}`)
                }
              >
                <VenuesImage src={venue.image} alt={venue.name} />
                <VenuesName>{venue.name}</VenuesName>
              </VenuesItemContainer>
            ))}
          </VenuesListContainer><TopButton />
        </VenuesContainer>
        
      </Transition>
    );

  return <section>{content}</section>;
};

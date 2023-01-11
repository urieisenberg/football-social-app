import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSearchVenuesQuery } from '../api';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import { TopButton } from '../../../components/Button';
import {
  VenuesContainer,
  VenuesTitle,
  VenuesListContainer,
  VenuesImage,
  VenuesName,
  VenuesItemContainer,
} from '../styles';

export const SearchVenues = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search');

  const {
    data: venues,
    isLoading,
    isSuccess,
  } = useSearchVenuesQuery(searchTerm as string);

  let content;
  if (isLoading) content = <Loader />;
  else if (!venues?.length)
    content = <VenuesTitle>No venues found</VenuesTitle>;
  else if (isSuccess && venues)
    content = (
      <Transition key="venues-results">
        <VenuesContainer>
          <VenuesTitle>Search Results for "{searchTerm}"</VenuesTitle>
          <VenuesListContainer>
            {venues.map((venue) => (
              <VenuesItemContainer
                key={venue.id}
                onClick={() =>
                  navigate(`/league/${leagueid}/venues/${venue.id}`)
                }
              >
                <VenuesImage src={venue.image} alt={venue.name} />
                <VenuesName>{venue.name + ' ' + venue.city}</VenuesName>
              </VenuesItemContainer>
            ))}
          </VenuesListContainer>
          {venues.length > 10 && <TopButton />}
        </VenuesContainer>
      </Transition>
    );

  return <section>{content}</section>;
};

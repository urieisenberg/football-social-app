import { useParams } from 'react-router-dom';
import { useGetVenueQuery } from '../../../app/services/football-api/veneus';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import {
  VenuesContainer,
  VenuesTitle,
  VenueItemImage,
  VenuesListContainer,
} from '../styles';

interface VenueItemProps {
  teamVenue?: string;
}

export const VenuesItem = ({ teamVenue }: VenueItemProps) => {
  const { venueid } = useParams();
  const {
    data: venue,
    isLoading,
    isSuccess,
    isError,
  } = useGetVenueQuery((venueid as string) || (teamVenue as string));

  let content;
  if (isLoading) content = <Loader />;
  else if (isError || !venue)
    content = <VenuesContainer>Something went wrong</VenuesContainer>;
  else if (isSuccess && venue)
    content = (
      <Transition key="venue">
        <VenuesContainer>
          <VenuesTitle>{venue.name}</VenuesTitle>
          <VenueItemImage src={venue.image} alt={venue.name} />
          <VenuesListContainer>
            <VenuesTitle>Capacity: {venue.capacity} </VenuesTitle>
            <VenuesTitle>Address: {venue.address}</VenuesTitle>
            <VenuesTitle>City: {venue.city} </VenuesTitle>
            <VenuesTitle>Country: {venue.country} </VenuesTitle>
          </VenuesListContainer>
        </VenuesContainer>
      </Transition>
    );

  return <section>{content}</section>;
};

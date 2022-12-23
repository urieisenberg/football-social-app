import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { usePathname } from '../../../hooks/usePathname';
import { useGetVenueQuery } from '../api';
import { Loader } from '../../../components/Loader';
import { Transition } from '../../../components/Transition';
import {
  VenuesContainer,
  VenuesTitle,
  VenueItemImage,
  VenuesListContainer,
} from '../styles';

export const VenuesItem = () => {
  const { venueid } = useParams();
  const { venue: teamVenue } = useAppSelector((state) => state.team);
  const { pathMatch } = usePathname();

  const venueToRender = pathMatch('league', 'includes') ? venueid : teamVenue.id;

  const {
    data: venue,
    isLoading,
    isSuccess,
    isError,
  } = useGetVenueQuery(venueToRender as string);

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

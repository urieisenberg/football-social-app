import { VenueFixture } from '../../types';
import { useNavigateToVenue } from '../../../../routes/hooks';
import { FixturesVenue, FixturesLink } from '../../styles';

interface FixturesVenueProps {
  leagueid: number;
  venue: VenueFixture;
}

export const FixtureVenue = ({
  venue,
  leagueid,
}: FixturesVenueProps) => {
  const { navigateToVenue } = useNavigateToVenue();

  return (
    <FixturesLink>
      <FixturesVenue onClick={() => navigateToVenue(leagueid, venue.id)}>
        {venue.name + ' ' + venue.city}
      </FixturesVenue>
    </FixturesLink>
  );
};

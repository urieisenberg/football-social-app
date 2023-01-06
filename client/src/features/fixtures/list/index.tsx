import { Fixture } from '../types';
import {
  FixturesWrapper,
  FixturesContainer,
} from '../styles';
import { Transition } from '../../../components/Transition';
import { FixtureVenue } from '../item/venue';
import { FixtureLeague } from '../item/league';
import { FixtureDate } from '../item/date';
import { FixtureLinks } from '../item/links';
import { TopButton } from '../../../components/Button';
import { FixtureScore } from '../item/score';

interface FixturesListProps {
  fixtures: Fixture[];
}

export const FixturesList = ({ fixtures }: FixturesListProps) => {
  return (
    <FixturesWrapper>
      <FixturesContainer>
        {fixtures.map((fixture, index) => (
          <Transition key={fixture.fixture.id}>
            <FixturesContainer>
              <FixtureLeague league={fixture.league} />
              <FixtureDate date={fixture.fixture.date} />
              <FixtureVenue
                leagueid={fixture.league.id}
                venue={fixture.fixture.venue}
              />

              <FixtureScore fixture={fixture} />
              <FixtureLinks fixture={fixture} />
              {index === fixtures.length - 1 && <TopButton />}
            </FixturesContainer>
          </Transition>
        ))}
      </FixturesContainer>
    </FixturesWrapper>
  );
};

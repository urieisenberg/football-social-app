import { useParams } from 'react-router-dom';
import { FixturesItemEvents } from './events';
import {
  useNavigateToVenue,
  useNavigateToTeam,
  useNavigateToHeadToHead,
} from '../../../routes/hooks';
import { useGetFixtureStatisticsQuery, useGetFixtureQuery } from '../api';
import {
  FixturesContainer,
  FixturesContent,
  FixturesDate,
  FixturesLeague,
  FixturesWrapper,
  FixturesVenue,
  FixturesLink,
  FixturesTeam,
  FixturesLogo,
  FixturesBR,
  FixturesScore,
  FixturesGoals,
  FixturesH2H,
  FixturesHR,
} from '../styles';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import { FixtureVenue } from './venue';
import { FixtureLeague } from './league';
import { FixtureDate } from './date';
import { FixtureLinks } from './links';
import { FixtureScore } from './score';

export const FixturesItem = () => {
  const { fixture } = useParams();
  const {
    data: fixtureData,
    isLoading,
    isError,
    isSuccess,
  } = useGetFixtureQuery(fixture as string);
  console.log(fixtureData);
  let content;
  if (isLoading || !fixtureData) content = <Loader />;
  else if (isError) content = <div>Something went wrong</div>;
  else if (isSuccess && fixtureData && fixtureData.fixture)
    content = (
      <FixturesWrapper>
        <Transition key={fixture + 'page'}>
          <FixturesContainer>
            <FixtureLeague league={fixtureData.fixture.league} />
            <FixtureDate date={fixtureData.fixture.fixture.date} />
            <FixtureVenue
              leagueid={fixtureData.fixture.league.id}
              venue={fixtureData.fixture.fixture.venue}
            />
            <FixtureScore fixture={fixtureData.fixture} />
            <FixtureLinks fixture={fixtureData.fixture} />
          </FixturesContainer>
        </Transition>
      </FixturesWrapper>
    );
  // else
  //   content = (
  //     <FixturesWrapper>
  //       <Transition key={fixture + 'page'}>
  //         <FixturesContainer>
  //           <FixturesLeague>
  //             {fixtureData.league.name + ' ' + fixtureData.league.round}
  //           </FixturesLeague>
  //           {/* <FixturesDate>
  //             {new Date(fixtureData.fixture.fixture.date).toLocaleString()}
  //           </FixturesDate> */}
  //           <FixturesLeague>
  //             Referee: {referee ? referee : 'TBD'}
  //           </FixturesLeague>
  //           <FixturesContent>
  //             <FixturesLink>
  //               <FixturesVenue
  //                 onClick={() =>
  //                   navigateToVenue(
  //                     fixtureData.league.id,
  //                     fixtureData.fixture.venue.id
  //                   )
  //                 }
  //               >
  //                 {venue ? venue : 'TBD'}
  //               </FixturesVenue>
  //             </FixturesLink>
  //             <FixturesTeam>
  //               <FixturesLink
  //                 onClick={() =>
  //                   navigateToTeam(
  //                     fixtureData.fixture.teams?.home.id,
  //                     fixtureData.fixture.teams?.home.name
  //                   )
  //                 }
  //               >
  //                 <FixturesLogo
  //                   src={fixtureData.fixture.teams?.home.logo}
  //                   alt={fixtureData.fixture.teams?.home.name}
  //                 />
  //                 <FixturesBR />
  //                 {fixtureData.fixture.teams?.home.name}
  //               </FixturesLink>
  //             </FixturesTeam>
  //             <FixturesScore>
  //               {fixtureData.fixture.status.short === 'NS' ||
  //               fixtureData.fixture.status.short === 'TBD' ? (
  //                 <FixturesCountdown date={fixtureData.fixture.date} />
  //               ) : (
  //                 <FixturesGoals>
  //                   {fixtureData.fixture.goals?.home +
  //                     ' - ' +
  //                     fixtureData.fixture.goals?.away}
  //                 </FixturesGoals>
  //               )}
  //             </FixturesScore>
  //             <FixturesTeam>
  //               <FixturesLink
  //                 onClick={() =>
  //                   navigateToTeam(
  //                     fixtureData.fixture.teams?.away.id,
  //                     fixtureData.fixture.teams?.away.name
  //                   )
  //                 }
  //               >
  //                 <FixturesLogo
  //                   src={fixtureData.fixture.teams?.away.logo}
  //                   alt={fixtureData.fixture.teams?.away.name}
  //                 />
  //                 <FixturesBR />

  //                 {fixtureData.fixture.teams?.away.name}
  //               </FixturesLink>
  //             </FixturesTeam>
  //           </FixturesContent>
  //           {/* <FixturesLink
  //             onClick={() =>
  //               navigateToHeadToHead(
  //                 fixtureData.fixture.teams.home.id as unknown as string,
  //                 fixtureData.fixture.teams.away.id as unknown as string,
  //                 fixtureData.fixture.teams.home.id,
  //                 fixtureData.fixture.teams.away.id,
  //                 fixtureData.fixture.teams.home.name,
  //                 fixtureData.fixture.teams.away.name
  //               )
  //             }
  //           >
  //             <FixturesH2H>
  //               Click to see more games between{' '}
  //               {fixtureData.fixture.teams.home.name} and{' '}
  //               {fixtureData.fixture.teams.away.name}
  //             </FixturesH2H>
  //           </FixturesLink> */}
  //           <FixturesHR />
  //           <FixturesItemEvents
  //             homeTeam={fixtureData.homeTeam.events}
  //             awayTeam={fixtureData.awayTeam.events}
  //             playersDataAvailable={fixtureData.playersDataAvailable}
  //           />
  //         </FixturesContainer>
  //       </Transition>
  //     </FixturesWrapper>
  //   );

  return <>{content}</>;
};

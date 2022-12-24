import { useState } from 'react';
import {
  useParams,
  useRoutes,
  useNavigate,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { useKeyPress } from '../../../app/hooks/useKeyPress';
import { Nav } from '../../../components/Nav';
import { Search } from '../../../components/Search';
import {
  TopAssistsPlayersList,
  TopRedCardsPlayersList,
  TopYellowCardsPlayersList,
  TopScorersPlayersList,
  SearchedPlayersList,
} from '../List';
import { PlayersSearchContainer } from '../styles';

export const LeaguePlayersLayout = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();

  let elements = useRoutes([
    { path: '', element: <Navigate to="top/scorers" /> },
    { path: 'top/scorers', element: <TopScorersPlayersList /> },
    { path: 'top/assists', element: <TopAssistsPlayersList /> },
    { path: 'top/yellow', element: <TopYellowCardsPlayersList /> },
    { path: 'top/red', element: <TopRedCardsPlayersList /> },
    { path: 'search', element: <SearchedPlayersList /> },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useKeyPress('Escape', () => {
    setSearchTerm('');
    navigate(`/league/${leagueid}/players/top/scorers`);
  });

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 4)
      navigate(`search?searchTerm=${e.target.value}`);
  };

  return (
    <>
      <PlayersSearchContainer>
        <Search
          placeholder="Search players"
          searchTerm={searchTerm}
          setSearchTerm={onSearch}
        />
      </PlayersSearchContainer>
      <Nav
        links={['top scorers', 'top assists', 'top yellow', 'top red']}
        mini="true"
      />
      <Outlet />
      {elements}
    </>
  );
};


// import {
//   useParams,
//   useRoutes,
//   useNavigate,
//   Outlet,
//   Navigate,
//   matchPath,
// } from 'react-router-dom';
// import { usePathname } from '../../../hooks/usePathname';
// import { useKeyPress } from '../../../hooks/useKeyPress';
// import { Nav } from '../../../components/Nav';
// import { Search } from '../../../components/Search';
// import {
//   TopAssistsPlayersList,
//   TopRedCardsPlayersList,
//   TopYellowCardsPlayersList,
//   TopScorersPlayersList,
//   SearchedPlayersList,
//   SquadPlayersList,
// } from '../List';
// import { InjuriesTeamList } from '../../injuries/List';
// import { PlayersSearchContainer } from '../styles';

// export const PlayersLayout = () => {
//   const { leagueid } = useParams();
//   const navigate = useNavigate();
//   const { pathMatch } = usePathname();

//   let leagueElements = useRoutes([
//     { path: '', element: <Navigate to="top/scorers" /> },
//     { path: 'top/scorers', element: <TopScorersPlayersList /> },
//     { path: 'top/assists', element: <TopAssistsPlayersList /> },
//     { path: 'top/yellow', element: <TopYellowCardsPlayersList /> },
//     { path: 'top/red', element: <TopRedCardsPlayersList /> },
//     { path: 'search', element: <SearchedPlayersList /> },
//   ]);

//   let teamsElements = useRoutes([
//     { path: '', element: <Navigate to="squad" /> },
//     { path: 'squad', element: <SquadPlayersList /> },
//     { path: 'injuries', element: <InjuriesTeamList /> },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   useKeyPress('Escape', () => {
//     setSearchTerm('');
//     navigate(`/league/${leagueid}/players/top/scorers`);
//   });

//   const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     if (e.target.value.length >= 4)
//       navigate(`search?searchTerm=${e.target.value}`);
//   };

//   const elements = pathMatch('/league', 'startsWith')
//     ? leagueElements
//     : teamsElements;

//   const navlinks = pathMatch('/league', 'startsWith')
//     ? ['top scorers', 'top assists', 'top yellow', 'top red']
//     : ['squad', 'injuries'];

//   return (
//     <>
//       <PlayersSearchContainer>
//         <Search
//           searchTerm={searchTerm}
//           setSearchTerm={onSearch}
//           placeholder="Search for a player"
//         />
//       </PlayersSearchContainer>
//       <Nav mini="true" links={navlinks} />
//       <Outlet />
//       {elements}
//     </>
//   );
// };

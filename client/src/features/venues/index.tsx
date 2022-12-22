import { useState } from 'react';
import {
  useParams,
  useRoutes,
  useNavigate,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { useKeyPress } from '../../hooks/useKeyPress';
import { Search } from '../../components/Search';
import { VenuesList } from './List';
import { VenuesItem } from './Item';
import { SearchVenues } from './Search';
import { VenuesContainer, VenuesSearchContainer } from './styles';

export const Venues = () => {
  const { leagueid } = useParams();
  const navigate = useNavigate();
  let elements = useRoutes([
    { path: '', element: <Navigate to="list" /> },
    { path: 'list', element: <VenuesList /> },
    { path: 'search', element: <SearchVenues /> },
    { path: ':venueid', element: <VenuesItem /> },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useKeyPress('Escape', () => {
    setSearchTerm('');
    navigate(`/league/${leagueid}/venues/list`);
  });

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 3) navigate(`search?search=${e.target.value}`);
  };

  return (
    <VenuesContainer>
      <VenuesSearchContainer>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={onSearch}
          placeholder="Search for a city or venue name"
        />
      </VenuesSearchContainer>
      <Outlet />
      {elements}
    </VenuesContainer>
  );
};

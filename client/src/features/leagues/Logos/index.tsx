import { useNavigate, useLocation } from 'react-router-dom';
import { Team } from '../../../app/types';
import { teams } from '../../../utils/db/teams';
import { LogosList, LogosContainer, LogosImage } from '../styles';

export const LeagueLogos = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick = (team: Team) => {
    let path;
    let teamPath = `/teams/${team.id}/${team.name}`;
    if (pathname.includes('next')) {
      path = 'fixtures/next';
    } else if (pathname.includes('last')) {
      path = 'fixtures/last';
    } else if (pathname.includes('players')) {
      path = 'players';
    } else if (pathname.includes('stadium')) {
      path = 'stadium';
    } else if (pathname.includes('table')) {
      path = 'standings';
    } else if (pathname.includes('social')) {
      path = 'social';
    } else path = '';

    return navigate(`${teamPath}/${path}`);
  };

  return (
    <LogosContainer>
      <LogosList>
        {teams.map((team) => (
          <LogosImage
            key={team.id}
            src={team.logo}
            alt={team.name}
            onClick={() => onClick(team)}
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title={team.name}
          />
        ))}
      </LogosList>
    </LogosContainer>
  );
};

import { useNavigate } from 'react-router-dom';
import { usePathname } from '../../../routes/hooks/usePathname';
import { Team } from '../../../app/types';
import { teams } from '../../../utils/db/teams';
import { LogosList, LogosContainer, LogosImage } from '../styles';

export const LeagueLogos = () => {
  const navigate = useNavigate();
  const {pathMatch} = usePathname();

  const onClick = (team: Team) => {
    let path;
    let teamPath = `team/${team.id}/${team.name}`;
    if (pathMatch('next', 'includes')) {
      path = 'fixtures/next';
    } else if (pathMatch('last', 'includes')) {
      path = 'fixtures/last';
    } else if (pathMatch('players', 'includes')) {
      path = 'players';
    } else if (pathMatch('stadium', 'includes')) {
      path = 'stadium';
    } else if (pathMatch('table', 'includes')) {
      path = 'standings';
    } else if (pathMatch('social', 'includes')) {
      path = 'social';
    } else path = '';
    return navigate(`/${teamPath}/${path}`);
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

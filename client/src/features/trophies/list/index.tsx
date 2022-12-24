import { TrophiesListProps } from '../types';
import { TrophiesContainer, TrophiesTitle, TrophiesItem } from '../styles';

export const TrophiesList = ({ trophies }: TrophiesListProps) => {
  return (
    <TrophiesContainer>
      <TrophiesTitle>Trophies</TrophiesTitle>
      {trophies.map((trophy) => (
        <TrophiesItem key={trophy.place + trophy.season}>
          {trophy.country} {trophy.place} In {trophy.season} {trophy.league}
        </TrophiesItem>
      ))}
    </TrophiesContainer>
  );
};

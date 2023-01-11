import { useParams } from 'react-router-dom';
import { useGetCoachByIdQuery } from '../api';
import { useNavigateToTeam } from '../../../app/hooks';
import { CoachCareer } from '../types';
import { CoachTrophies } from '../../trophies/list/coachTrophies';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import {
  CoachContainer,
  CoachDetail,
  CoachImage,
  CoachLine,
  CoachHeader,
  CoachRow,
  CoachLink,
  CoachContent,
  CoachTitle,
} from '../styles';

export const CoachItem = () => {
  const { coachid } = useParams();
  const {
    data: coach,
    isLoading,
    isSuccess,
  } = useGetCoachByIdQuery(coachid as string);

  const { navigateToTeam } = useNavigateToTeam();

  let content;
  if (isLoading) content = <Loader />;
  else if (isSuccess && coach)
    content = (
      <Transition>
        <CoachContainer>
          <CoachHeader>
            {coach.firstname} {coach.lastname}
          </CoachHeader>
          <CoachDetail>
            <CoachImage src={coach.photo} alt={coach.name} />
          </CoachDetail>
          {coach.height && <CoachDetail>Height: {coach.height}</CoachDetail>}
          {coach.weight && <CoachDetail>Weight: {coach.weight}</CoachDetail>}
          <CoachDetail>Age: {coach.age}</CoachDetail>
          <CoachDetail>Born: {coach.birth?.date} </CoachDetail>
          <CoachDetail>City: {coach.birth.place} </CoachDetail>
          <CoachDetail>Country: {coach.birth.country} </CoachDetail>
          <CoachDetail>Nationality: {coach.nationality}</CoachDetail>
          <CoachLine /> <CoachTitle> Career </CoachTitle>
          {coach?.career?.map((carreer: CoachCareer) => (
            <CoachContent key={carreer.start}>
              <CoachRow>
                <CoachDetail>
                  <CoachLink
                    onClick={() =>
                      navigateToTeam(carreer.team.id, carreer.team.name)
                    }
                  >
                    {carreer.team.name}
                  </CoachLink>
                </CoachDetail>
                <CoachDetail>
               <>from </> {carreer.start}
                  
              <> till </>    {carreer.end !== null ? carreer.end : ' present'}
                </CoachDetail>
              </CoachRow>
            </CoachContent>
          ))}
          <CoachLine />
          <CoachTrophies />
        </CoachContainer>
      </Transition>
    );

  return <>{content}</>;
};

import { useParams } from 'react-router-dom';
import { useGetCoachByTeamQuery } from '../api';
import { CoachCareer } from '../types';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import {
  CoachContainer,
  CoachDetail,
  CoachItem,
  CoachTitle,
  CoachImage,
  CoachLine,
  CoachHeader,
  CoachRow,
  CoachTeam,
} from '../styles';

export const CoachList = () => {
  const { teamid } = useParams();
  const { data, isLoading, isSuccess } = useGetCoachByTeamQuery(
    teamid as string
  );

  console.log(data);

  let content;
  if (isLoading) content = <Loader />;
  if (isSuccess && data)
    content = (
      <Transition>
        <CoachContainer>
          <CoachHeader>Staff:</CoachHeader>
          {data.map((coach, index) => (
            <CoachItem key={coach.id}>
              <CoachDetail>
                <CoachTitle>
                  {coach.firstname + ' ' + coach.lastname}
                </CoachTitle>
              </CoachDetail>
              <CoachDetail>
                <CoachImage src={coach.photo} alt={coach.name} />
              </CoachDetail>
              <CoachRow>
                <CoachDetail>Age: {coach.age}</CoachDetail>
              </CoachRow>
              <CoachDetail>Born: {coach.birth.date} </CoachDetail>
              <CoachDetail>City: {coach.birth.place} </CoachDetail>
              <CoachDetail>Country: {coach.birth.country} </CoachDetail>{' '}
              <CoachDetail>Nationality: {coach.nationality}</CoachDetail>
              {coach?.career?.map((carreer: CoachCareer) => (
                <CoachRow key={carreer.start}>
                  <CoachTeam>{carreer.team.name}</CoachTeam>
                  <CoachDetail>
                    From: {carreer.start} till{' '}
                    {carreer.end !== null ? carreer.end : 'present'}
                  </CoachDetail>
                </CoachRow>
              ))}
              {index !== data.length - 1 && <CoachLine />}
            </CoachItem>
          ))}
        </CoachContainer>
      </Transition>
    );

  return <>{content}</>;
};

import { useParams, useNavigate } from 'react-router-dom';
import { useGetCoachByTeamQuery } from '../api';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';
import {
  CoachContainer,
  CoachDetail,
  CoachContent,
  CoachTitle,
  CoachImage,
  CoachLine,
  CoachHeader,
  CoachLink,
  CoachRow,
} from '../styles';

export const CoachList = () => {
  const { teamid } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useGetCoachByTeamQuery(
    teamid as string
  );

  let content;
  if (isLoading) content = <Loader />;
  if (isSuccess && data)
    content = (
      <Transition>
        <CoachContainer>
          <CoachHeader>Staff:</CoachHeader>
          {data.map((coach, index) => (
            <CoachContent
              key={coach.id}
              onClick={() => navigate(`${coach.id}`)}
            >
              <CoachDetail>
                <CoachLink>
                  <CoachTitle>
                    {coach.firstname + ' ' + coach.lastname}
                  </CoachTitle>
                </CoachLink>
              </CoachDetail>
              <CoachDetail>
                <CoachLink>
                  <CoachImage src={coach.photo} alt={coach.name} />
                </CoachLink>
              </CoachDetail>
              <CoachRow>
                <CoachDetail>Age: {coach.age}</CoachDetail>
              </CoachRow>
              <CoachDetail>Nationality: {coach.nationality}</CoachDetail>
              {index !== data.length - 1 && <CoachLine />}
            </CoachContent>
          ))}
        </CoachContainer>
      </Transition>
    );

  return <>{content}</>;
};

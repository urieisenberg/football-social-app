import { LoaderWrapper, LoaderContainer, LoaderBall } from './styles';
import { GiSoccerBall } from 'react-icons/gi';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <LoaderBall>
          <GiSoccerBall size={50} />
        </LoaderBall>
        <LoaderBall>
          <GiSoccerBall size={50} />
        </LoaderBall>
        <LoaderBall>
          <GiSoccerBall size={50} />
        </LoaderBall>
      </LoaderContainer>
    </LoaderWrapper>
  );
};

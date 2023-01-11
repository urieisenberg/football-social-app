import {
  SocialContainer,
  YoutubeContent,
  YoutubeIframe,
  YoutubeTitle,
  YoutubeLine,
} from '../styles';
import { TopButton } from '../../../components/Button';

export const Youtube = () => {
  return (
    <SocialContainer>
      <YoutubeContent>
        <YoutubeTitle>Highlights</YoutubeTitle>
        <YoutubeIframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PLFTjYT0jsEKz-OMzEacE9GqZug6cB5eD2" />
        <YoutubeLine />
        <YoutubeTitle>Top Goals</YoutubeTitle>
        <YoutubeIframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PLFTjYT0jsEKzJ2Cgh-xDoWEA0fPWKTEB9" />
        <YoutubeLine />
        <YoutubeTitle>Interviews</YoutubeTitle>
        <YoutubeIframe src="https://www.youtube.com/embed/videoseries?list=PLFTjYT0jsEKwLtHuVj0JD-Tejmqe2X8Vf" />
      </YoutubeContent>
      <TopButton />
    </SocialContainer>
  );
};

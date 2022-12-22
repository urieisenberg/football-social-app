import { useTwitter } from '../../../hooks/useTwitter';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { SocialContainer } from '../styles';
import { Transition } from '../../../components/Transition';
import { Loader } from '../../../components/Loader';

export const Twitter = () => {
  const { twitterPage, isLoading, twitterTheme } = useTwitter();

  let content;
  if (isLoading) content = <Loader />;
  else if (twitterPage)
    content = (
      <Transition key={twitterPage}>
        <SocialContainer>
          <TwitterTimelineEmbed
            noFooter
            noHeader
            noBorders
            noScrollbar
            theme={twitterTheme}
            screenName={twitterPage}
            sourceType="profile"
            transparent
          />
        </SocialContainer>
      </Transition>
    );

  return <section>{content}</section>;
};

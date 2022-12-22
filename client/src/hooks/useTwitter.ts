import { useState, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TEAM_NAME_TO_TWITTER_PAGE } from '../features/social/utils/teamNameToTwitterPage';

interface ITwitter {
  twitterPage: string;
  isLoading: boolean;
  twitterTheme: 'light' | 'dark';
}

export const useTwitter = (): ITwitter => {
  const { teamname } = useParams<{ teamname: string }>();
  const [twitterPage, setTwitterPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  const twitterTheme =
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark';

  useLayoutEffect(() => {
    const twitterPage = teamname
      ? TEAM_NAME_TO_TWITTER_PAGE[teamname]
      : 'SerieA_EN';
    setTwitterPage(twitterPage);
    return () => {
      isMounted.current = false;
    };
  }, [teamname]);

  useLayoutEffect(() => {
    if (isMounted.current) {
      setIsLoading(false);
    }
  }, [twitterPage]);

  return {
    twitterPage,
    isLoading,
    twitterTheme,
  };
};

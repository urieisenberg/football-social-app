import { useState, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TEAM_NAME_TO_FACEBOOK_PAGE } from '../features/social/utils/teamNameToFacebookPage';

interface IFacebook {
  facebookPage: string;
  isLoading: boolean;
}

export const useFacebook = (): IFacebook => {
  const { teamname } = useParams<{ teamname: string }>();
  const [facebookPage, setFacebookPage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  useLayoutEffect(() => {
    const facebookPage = teamname
      ? TEAM_NAME_TO_FACEBOOK_PAGE[teamname]
      : 'SerieA';
    setFacebookPage(facebookPage);
    return () => {
      isMounted.current = false;
    };
  }, [teamname]);

  useLayoutEffect(() => {
    if (isMounted.current) {
      setIsLoading(false);
    }
  }, [facebookPage]);

  return {
    facebookPage,
    isLoading,
  };
};

import { FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';

export const transformCoachResponse = (
  response: any,
  meta: FetchBaseQueryMeta,
  arg: string
) => {
  const currentCoach = response.response.filter(
    (coach: any) => coach.team.id === parseInt(arg)
  );
  return currentCoach;
};

export const transformCoachTrophiesResponse = (response: any) => {
  return response.response;
};

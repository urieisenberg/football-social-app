export const transformCoachResponse = (
  response: any,
  meta: any,
  arg: number
) => {
  const currentCoach = response.response.filter(
    (coach: any) => coach.team.id === (arg)
  );
  return currentCoach;
};

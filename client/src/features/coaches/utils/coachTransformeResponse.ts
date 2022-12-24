// export const transformCoachResponse = (
//   response: any,
//   meta: any,
//   arg: string
// ) => {
//   const currentCoach = response.response.filter(
//     (coach: any) => coach.team.id === arg
//   );
//   return response;
// };

export const transformCoachResponse = (response: any) => {
  return response.response;
};

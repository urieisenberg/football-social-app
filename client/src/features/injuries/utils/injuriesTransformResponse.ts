export const getInjureiesTransformResponse = (response: any) => {
  let currentInjuriesPlayers: any[] = [];
  const currentInjuries = response.response.filter((injury: any) => {
    const isDuplicate = currentInjuriesPlayers.includes(injury.player.id);
    !isDuplicate && currentInjuriesPlayers.push(injury.player.id);
  });
  return currentInjuries;
};

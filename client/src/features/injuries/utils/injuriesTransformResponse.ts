export const getInjureiesTransformResponse = (response: any): any[] => {
  const currentInjuries = response.response.reduce(
    (acc: any[], injury: { player: { id: any } }) => {
      const isDuplicate = acc.find((i) => i.player.id === injury.player.id);
      if (!isDuplicate) {
        acc.push(injury);
      }
      return acc;
    },
    []
  );
  return currentInjuries;
};

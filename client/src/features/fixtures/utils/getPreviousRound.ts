export const getPreviousRound = (currentRound: string) =>
  currentRound.replace(/\d+/, (match) => String(Number(match) - 1));

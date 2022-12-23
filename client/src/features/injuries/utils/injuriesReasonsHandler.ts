import { ReasonOfInjury } from '../types';

export const injuriesReasonsHandler = (reasons: ReasonOfInjury) => {
  const reasonsOfInjuries = reasons.map((reason) => {
    switch (reason) {
      case 'Injury':
        return 'Injury 🚑';
      case 'Red Card':
        return 'Red Card 🟥';
      case 'Suspended':
        return 'Suspended 🔴';
      case 'Yellow Cards':
        return 'Yellow Cards 🟨🟨';
      default:
        return 'injured';
    }
  });
  return reasonsOfInjuries;
};

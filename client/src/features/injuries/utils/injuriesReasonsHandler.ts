export const injuriesReasonsHandler = (reason: string) => {
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
      return reason;
  }
};

export const handleEventIcon = (
  event: string,

) => {
  switch (event) {
    case 'Goal':
      return '⚽'
    case 'Red Card':
      return '🟥';
    case 'Yellow Card':
      return '🟨';
    case 'Substitution':
      return '🔄';
    default:
      return '';
  }
};

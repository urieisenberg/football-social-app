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
      case 'Foul':
      return '🥊';
      case 'Saved':
      return '🧤';
    default:
      return '';
  }
};

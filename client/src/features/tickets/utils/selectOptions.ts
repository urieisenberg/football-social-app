const options = [
  {
    value: 'general',
    label: 'General',
  },
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

export const ticketsSelectOptions = options.map((option) => {
  return {
    value: option.value,
    label: option.label,
  };
});

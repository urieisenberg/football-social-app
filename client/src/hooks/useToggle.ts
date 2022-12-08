import { useState, useCallback } from 'react';

export const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
};

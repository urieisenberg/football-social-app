import { useEventListener } from './useEventListener';

export const useKeyPress = (targetKey: string, callback: () => void) => {
  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      callback();
    }
  });
};

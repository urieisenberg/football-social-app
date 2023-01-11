import { useEffect, useRef } from 'react';

export const useEventListener = (
  eventType: string,
  handler: any,
  element = document
) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (element == null) return;
    const eventListener = (event: any) => handlerRef.current(event);
    element.addEventListener(eventType, eventListener);

    return () => {
      element.removeEventListener(eventType, eventListener);
    };
  }, [eventType, element]);
};

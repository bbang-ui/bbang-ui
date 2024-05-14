import { RefObject, useEffect } from 'react';

function useEventListener<EventType extends keyof HTMLElementEventMap>(
  event: EventType,
  handler: (e: HTMLElementEventMap[EventType]) => void,
  elementRef: RefObject<HTMLElement>,
) {
  useEffect(() => {
    const ref = elementRef.current;
    if (ref) {
      ref.addEventListener(event, handler);
      return () => ref.removeEventListener(event, handler);
    }
  }, []);
}

export { useEventListener };

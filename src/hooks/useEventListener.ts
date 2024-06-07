import { ElementRef } from '@/types/default';
import { useEffect } from 'react';

function useEventListener<EventType extends keyof HTMLElementEventMap>(
  event: EventType,
  handler: (e: HTMLElementEventMap[EventType]) => void,
  elementRef: ElementRef,
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

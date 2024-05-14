import { useEventListener } from '@/hooks/useEventListener';
import type { RefObject } from 'react';
import { useState } from 'react';

function useHover(elementRef: RefObject<HTMLElement>) {
  const [value, setValue] = useState(false);

  const handleMouseEnter = () => {
    setValue(true);
  };
  const handleMouseLeave = () => {
    setValue(false);
  };

  useEventListener('mouseenter', handleMouseEnter, elementRef);
  useEventListener('mouseleave', handleMouseLeave, elementRef);

  return value;
}

export { useHover };

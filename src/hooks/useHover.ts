import { useEventListener } from '@/hooks/useEventListener';
import { ElementRef } from '@/types/default';
import { useState } from 'react';

function useHover(elementRef: ElementRef) {
  const [value, setValue] = useState(false);

  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEventListener('mouseenter', handleMouseEnter, elementRef);
  useEventListener('mouseleave', handleMouseLeave, elementRef);

  return value;
}

export { useHover };

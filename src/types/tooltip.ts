import { DefaultProps } from '@/types/default';
import { RefObject, ReactNode } from 'react';

export type DirectionType = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps extends DefaultProps {
  ref?: RefObject<HTMLSpanElement>;
  label?: string;
  placement?: DirectionType;
  disable?: string;
  hasArrow?: boolean;
  message: string | ReactNode;
}

export type { TooltipProps };

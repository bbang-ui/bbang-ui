import { DefaultProps } from '@/types/default';
import { LegacyRef, ReactNode } from 'react';

type PlacementType = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps extends DefaultProps {
  ref?: LegacyRef<HTMLSpanElement>;
  label?: string;
  direction?: PlacementType;
  disable?: string;
  hasArrow?: boolean;
  message: string | ReactNode;
}

export type { TooltipProps };

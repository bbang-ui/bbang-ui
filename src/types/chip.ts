import { ReactNode } from 'react';

import { ActiveState, DefaultProps } from '@/types/default';

export type ChipVariant = 'contained' | 'outlined';
export type ChipSize = 'sm' | 'md' | 'lg';

interface ChipProps extends DefaultProps {
  label?: string;
  variant?: ChipVariant;
  size?: ChipSize;
  colorTheme?: string;
  borderRadius?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  children?: ReactNode;
  active?: ActiveState;
  fontSize: string;
}

export type { ChipProps };

import { ReactNode } from 'react';

import {
  ActiveState,
  ColorToken,
  DefaultProps,
  SizeToken,
} from '@/types/default';

interface ChipProps extends DefaultProps {
  label?: string;
  size?: Exclude<SizeToken, 'xl' | '2xl' | '3xl'>;
  colorTheme?: ColorToken;
  borderRadius?: string;
  children?: ReactNode;
  active?: ActiveState;
  fontSize?: number;
  onClick?: () => void;
  isDisabled?: boolean;
}

export type { ChipProps };

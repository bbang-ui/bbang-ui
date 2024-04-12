import { ReactNode } from 'react';

import { ColorToken, DefaultProps, SizeToken } from '@/types/default';

interface ChipProps extends DefaultProps {
  label?: string;
  size?: SizeToken;
  colorTheme?: ColorToken;
  borderRadius?: string;
  children?: ReactNode;
  active?: boolean;
  fontSize?: number;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ChipProps };

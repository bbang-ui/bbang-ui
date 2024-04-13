import { DefaultProps, SizeToken } from '@/types/default';
import { ReactNode } from 'react';

interface SpinnerProps extends DefaultProps {
  size?: SizeToken;
  thickness?: number;
  color?: string;
  bgColor?: string;
  speed?: string;
  children?: ReactNode;
}

export type { SpinnerProps };

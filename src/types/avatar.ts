import { SizeToken } from '@/types/default';
import { ReactNode } from 'react';

interface SizeProps {
  size?: SizeToken;
}

interface AvatarProps extends SizeProps {
  name?: string;
  src?: string;
}

interface AvatarGroupProps extends SizeProps {
  max?: number;
  space?: string;
  children?: ReactNode;
}

export type { AvatarGroupProps, AvatarProps };

import { SizeToken } from '@/types/default';
import { ReactNode } from 'react';

interface DefaultAvatarProps {
  size?: SizeToken;
  max?: number;
}

interface AvatarProps extends DefaultAvatarProps {
  index?: number;
  name?: string;
  imgUrl?: string;
}

interface AvatarGroupProps extends DefaultAvatarProps {
  space?: number;
  children?: ReactNode;
}

export type { AvatarGroupProps, AvatarProps };

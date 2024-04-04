import { DefaultProps } from '@/types/default';
import { RefObject } from 'react';

interface ButtonProps extends DefaultProps {
  ref?: RefObject<HTMLButtonElement>;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
  fs?: number;
  colorTheme?: 'primary' | 'black' | 'white';
  variants?: 'none' | 'outline';
  onClick?: () => void;
  isDisabled?: boolean;
}

export type { ButtonProps };

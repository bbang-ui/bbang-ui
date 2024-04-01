import { DefaultProps } from '@/types/default';
import { RefObject } from 'react';

interface ButtonProps extends DefaultProps {
  ref?: RefObject<HTMLButtonElement>;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
  colorTheme?: 'primary' | 'black' | 'white';
  variants?: 'none' | 'outline';
  action?: () => void;
  isDisabled?: boolean;
}

export type { ButtonProps };

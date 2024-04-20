import { DefaultProps } from '@/types/default';

interface SwitchProps extends DefaultProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'black';
  onClick?: () => void;
  isDisabled?: boolean;
}

export type { SwitchProps };

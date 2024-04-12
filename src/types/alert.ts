import { DefaultProps } from './default';

interface AlertProps extends DefaultProps {
  status?: 'success' | 'error' | 'warning' | 'info';
  variants?: 'fill' | 'outline';
  customIcon?: string;
}

export type { AlertProps };

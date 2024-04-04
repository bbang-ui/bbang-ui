import { CSSProperties, ReactNode } from 'react';

interface DefaultProps {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type { DefaultProps };

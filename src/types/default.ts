import { CSSProperties, ReactNode } from 'react';

interface DefaultProps {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type SizeToken = 'xs' | 'sm' | 'md' | 'lg';
type ShadowToken = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type ColorToken = 'primary' | 'black' | 'white';

export type { DefaultProps, ColorToken, ShadowToken, SizeToken };

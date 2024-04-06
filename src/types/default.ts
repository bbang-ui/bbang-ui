import { CSSProperties, ReactNode } from 'react';

interface DefaultProps {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type SizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type ActiveState = 'disabled' | 'default' | 'hover';
type ShadowToken = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type ColorToken = 'primary' | 'black' | 'white';
type FontSizeToken =
  | '3sx'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl';

export type {
  DefaultProps,
  ActiveState,
  FontSizeToken,
  ColorToken,
  ShadowToken,
  SizeToken,
};

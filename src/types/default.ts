import { CSSProperties, ReactNode } from 'react';

interface PropsWithChildren {
  children?: ReactNode;
}
interface DefaultProps extends PropsWithChildren {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
}

type SizeToken = 'xs' | 'sm' | 'md' | 'lg';
type ShadowToken = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type ColorToken = 'primary' | 'black' | 'white';

export type {
  ColorToken,
  DefaultProps,
  PropsWithChildren,
  ShadowToken,
  SizeToken,
};

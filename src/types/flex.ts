import { DefaultProps } from '@/types/default';

export type JustifyContentToken =
  | 'center'
  | 'end'
  | 'start'
  | 'around'
  | 'between'
  | 'evenly'
  | 'stretch'
  | 'normal';

export type AlignItemsToken =
  | 'baseline'
  | 'center'
  | 'end'
  | 'start'
  | 'stretch'
  | 'normal';

type FlexDirectionToken = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type FlexWrapToken = 'nowrap' | 'wrap' | 'wrap-reverse';

interface FlexProps extends DefaultProps {
  direction?: FlexDirectionToken;
  justify?: JustifyContentToken;
  align?: AlignItemsToken;
  wrap?: FlexWrapToken;
  grow?: number;
  shrink?: number;
  basis?: string;
  gap?: number | string;
}

export type { FlexProps };

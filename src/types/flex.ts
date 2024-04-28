import { DefaultProps } from '@/types/default';

type JustifyContentToken =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'
  | 'normal';

type AlignItemsToken =
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
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

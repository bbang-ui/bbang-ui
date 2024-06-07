import { CSSProperties, ReactNode } from 'react';

type Position =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'
  | 'right'
  | 'rightTop'
  | 'rightBottom';

type Delay = 'enter' | 'leave';

interface Points {
  top: number;
  left: number;
}

interface ContentAndPosition {
  content?: ReactNode;
  position?: Position;
}

interface InternalTooltipsProps extends ContentAndPosition {
  backgroundColor: string;
}

interface useTooltipsProps extends ContentAndPosition {
  delay?: Delay;
  delayTime?: number;
  disabled?: boolean;
  customStyles?: CSSProperties;
}

interface TooltipProps extends useTooltipsProps {
  children: ReactNode;
}

export type {
  InternalTooltipsProps,
  Points,
  Position,
  TooltipProps,
  useTooltipsProps,
};

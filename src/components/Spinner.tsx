import { COLORS } from '@/styles/color';
import { SpinnerProps } from '@/types/spinner';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const SIZE = {
  xs: 25,
  sm: 30,
  md: 40,
  lg: 50,
};

const FONT_SIZE = {
  xs: 12,
  sm: 20,
  md: 30,
  lg: 40,
};

function Spinner({ children, ...props }: SpinnerProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Spinner;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size = 'sm' }) => {
    return `
      width: ${SIZE[size]}px;
      height: ${SIZE[size]}px;
    `;
  }}
  font-size: ${({ size = 'sm' }) => FONT_SIZE[size]}px;
  ${({
    children,
    thickness = 2,
    color = COLORS.BLACK,
    emptyColor = 'transparent',
  }) => {
    return children
      ? ``
      : `border: ${thickness}px solid
    ${color};
  border-left-color: ${emptyColor};
  border-radius: 100%;`;
  }}
  animation: ${rotate} ${({ speed = 1 }) => speed}s infinite linear;
`;

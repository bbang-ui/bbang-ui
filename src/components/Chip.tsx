import styled from '@emotion/styled';

import { COLORS } from '@/styles/color';
import { ChipProps } from '@/types/chip';
import { forwardRef, useState } from 'react';

const SIZE_MAP = {
  xs: {
    width: 50,
    height: 18,
  },
  sm: {
    width: 60,
    height: 24,
  },
  md: {
    width: 90,
    height: 28,
  },
  lg: {
    width: 100,
    height: 32,
  },
};

const Chip = forwardRef(
  ({ onClick, label, children, disabled, ...props }: ChipProps) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Wrapper
        active={isSelected}
        onClick={() => {
          setIsSelected((prev) => !prev);
          onClick?.();
        }}
        disabled={disabled}
        arial-label={label ?? 'chip'}
        {...props}
      >
        {children}
      </Wrapper>
    );
  },
);

export default Chip;

const Wrapper = styled.button<ChipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.disabled};
  font-size: ${({ fontSize = 12 }) => fontSize}px;
  padding: '8px 16px 8px 32px';
  border-radius: 100em;

  ${({ size = 'sm' }) => {
    const { width, height } = SIZE_MAP[size];
    return `
      width: ${width}px;
      height: ${height}px;
    `;
  }}

  background-color: ${({ colorTheme = COLORS.white, active }) => {
    switch (colorTheme) {
      case 'primary':
        if (active) return COLORS.skin;
        return COLORS.primary;
      case 'black':
        if (active) return COLORS.black;
        return COLORS.black_sub;
      case 'white':
        if (active) return COLORS.primary;
        return COLORS.white;
      default:
        return colorTheme;
    }
  }};

  color: ${({ colorTheme = 'white' }) => {
    return colorTheme === 'primary' || colorTheme === 'white'
      ? COLORS.black
      : COLORS.white;
  }};

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.disabled};
    background-image: none;
  }

  &:hover:not(:disabled) {
    transition: all 0.15s ease-in-out;
    background-color: ${({ colorTheme }) => {
      switch (colorTheme) {
        case 'primary':
          return COLORS.skin;
        case 'black':
          return COLORS.black_sub;
        case 'white':
          return COLORS.primary;
        default:
          return colorTheme;
      }
    }};
    transition: 0.4s;
    border-color: ${COLORS.black};
  }
`;

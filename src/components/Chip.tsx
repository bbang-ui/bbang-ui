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
  border: 1px solid ${COLORS.DISABLED};
  font-size: ${({ fontSize = 12 }) => fontSize}px;
  padding: '8px 16px 8px 32px';
  border-radius: 100rem;

  ${({ size = 'sm' }) => {
    const { width, height } = SIZE_MAP[size];
    return `
      width: ${width}px;
      height: ${height}px;
    `;
  }}

  background-color: ${({ colorTheme = COLORS.WHITE, active }) => {
    switch (colorTheme) {
      case 'primary':
        if (active) return COLORS.SKIN;
        return COLORS.PRIMARY;
      case 'black':
        if (active) return COLORS.BLACK;
        return COLORS.BLACK_SUB;
      case 'white':
        if (active) return COLORS.PRIMARY;
        return COLORS.WHITE;
      default:
        return colorTheme;
    }
  }};

  color: ${({ colorTheme = 'white' }) => {
    return colorTheme === 'primary' || colorTheme === 'white'
      ? COLORS.BLACK
      : COLORS.WHITE;
  }};

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.DISABLED};
    background-image: none;
  }

  &:hover:not(:disabled) {
    transition: all 0.15s ease-in-out;
    background-color: ${({ colorTheme }) => {
      switch (colorTheme) {
        case 'primary':
          return COLORS.SKIN;
        case 'black':
          return COLORS.BLACK_SUB;
        case 'white':
          return COLORS.PRIMARY;
        default:
          return colorTheme;
      }
    }};
    transition: 0.4s;
    border-color: ${COLORS.BLACK};
  }
`;

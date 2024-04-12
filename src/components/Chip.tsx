import styled from '@emotion/styled';

import { COLORS, DARK_MODE_COLORS } from '@/styles/color';
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
  border: 1px solid #eee;
  font-size: ${({ fontSize = 12 }) => fontSize}px;
  padding: '8px 16px 8px 32px';
  border-radius: 100em;

  ${({ colorTheme = 'primary' }) => {
    return `
      background-color: ${COLORS.white};
      color: ${DARK_MODE_COLORS[colorTheme]};
    `;
  }}

  ${({ size = 'sm' }) => {
    const { width, height } = SIZE_MAP[size];
    return `
      width: ${width}px;
      height: ${height}px;
      
    `;
  }}



&:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.disabled};
    background-image: none;
  }

  ${({ active }) => active === true && `background-color:${COLORS.primary};`};

  &:hover:not(:disabled) {
    transition: all 0.15s ease-in-out;
    background-color: ${COLORS.primary};
    transition: 0.4s;
    border-color: ${COLORS.black};
  }
`;

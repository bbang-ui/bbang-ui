import styled from '@emotion/styled';

import { COLORS, DARK_MODE_COLORS } from '@/styles/color';
import { ChipProps } from '@/types/chip';

const SIZE_MAP = {
  xs: {
    width: 50,
    height: 20,
    padding: '0px 4px',
    borderRadius: 10,
  },
  sm: {
    width: 100,
    height: 30,
    padding: '0px 8px',
    borderRadius: 10,
  },
  md: {
    width: 150,
    height: 40,
    padding: '0px 12px',
    borderRadius: 20,
  },
  lg: {
    width: 200,
    height: 50,
    padding: '0px 16px',
    borderRadius: 30,
  },
};

function Chip({
  onClick,
  isDisabled = false,
  label,
  children,
  ...props
}: ChipProps) {
  return (
    <Wrapper
      onClick={onClick}
      disabled={isDisabled}
      arial-label={label ?? 'chip'}
      {...props}
    >
      {children}
    </Wrapper>
  );
}

export default Chip;

const Wrapper = styled.button<ChipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  cursor: pointer;
  font-size: ${({ fontSize = 12 }) => fontSize}px;

  ${({ colorTheme = 'primary' }) => {
    return `
    
      background-color: ${COLORS[colorTheme]};
      color: ${DARK_MODE_COLORS[colorTheme]};
    `;
  }}

  ${({ size = 'sm' }) => {
    const { width, height, padding, borderRadius } = SIZE_MAP[size];
    return `
      width: ${width}px;
      height: ${height}px;
      padding: ${padding};
      border-radius: ${borderRadius}px;
    `;
  }}


  &:hover {
    transition: all 0.15s ease-in-out;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    box-shadow: 0.2px 0.2px 0.2px 0.2px ${COLORS.hover};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: none;
  }
`;

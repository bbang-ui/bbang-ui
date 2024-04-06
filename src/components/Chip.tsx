import styled from '@emotion/styled';

import COLORS from '@/styles/color';
import { ChipProps } from '@/types/chip';

function Chip({ label, children, ...props }: ChipProps) {
  return (
    <Wrapper arial-label={label ?? 'chip'} {...props}>
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

  width: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return 100;
      case 'md':
        return 150;
      case 'lg':
        return 200;
      default:
        return 150;
    }
  }}px;

  height: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return 30;
      case 'md':
        return 40;
      case 'lg':
        return 50;
      default:
        return 40;
    }
  }}px;

  padding: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return '0px 8px';
      case 'md':
        return '0px 12px';
      case 'lg':
        return '0px 16px';
      default:
        return '0px 12px';
    }
  }};

  font-size: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return 12;
      case 'md':
        return 14;
      case 'lg':
        return 15;
      default:
        return 14;
    }
  }}px;

  border-radius: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return 10;
      case 'md':
        return 20;
      case 'lg':
        return 30;
      default:
        return 20;
    }
  }}px;

  background-color: ${({ colorTheme = COLORS.primary }) => {
    switch (colorTheme) {
      case 'primary':
        return COLORS.primary;
      case 'black':
        return COLORS.black;
      case 'white':
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

  &:hover {
    transition: all 0.15s ease-in-out;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    box-shadow: 1.5px 1.5px 1.5px 1.5px ${COLORS.hover};
    color: ${COLORS.hoverText};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: none;
  }
`;

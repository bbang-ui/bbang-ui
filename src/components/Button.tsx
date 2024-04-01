import COLORS from '@/styles/color';
import { ButtonProps } from '@/types/button';
import styled from '@emotion/styled';

function Button({
  type = 'button',
  action,
  isDisabled = true,
  children,
  ...props
}: ButtonProps) {
  return (
    <Wrapper type={type} onClick={action} disabled={isDisabled} {...props}>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button<ButtonProps>`
  width: ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return 70;
      case 'md':
        return 80;
      case 'lg':
        return 100;
      default:
        return size;
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
        return Math.round(size / 4);
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

  border: unset;
  border: 1px ${({ variants }) => (variants === 'none' ? 'none' : 'solid')};
  border-radius: 10px;

  font-size: 12px;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

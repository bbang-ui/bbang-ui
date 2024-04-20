import { COLORS } from '@/styles/color';
import { AlertProps } from '@/types/alert';
import AlertBgColor from '@/utils/Alert/AlertBgColor';
import AlertFillColor from '@/utils/Alert/AlertFillColor';

import { keyframes } from '@emotion/react';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

function Alert({ status, customIcon, children, ...props }: AlertProps) {
  const [show, setShow] = useState(true);
  const [isAnimation, setIsAnimation] = useState(true);

  let icon = '';
  switch (status) {
    case 'success':
      icon = '✅';
      break;
    case 'error':
      icon = '❎';
      break;
    case 'warning':
      icon = '⚠️';
      break;
    case 'info':
      icon = '💡';
      break;
    default:
      icon = '🍞';
      break;
  }

  // 커스텀 아이콘 있을 때는 커스텀 아이콘으로 변경
  if (customIcon) {
    icon = customIcon;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsAnimation(false);
      setTimeout(() => {
        setShow(false);
      }, 500);
    }, 5000);
  }, []);

  return (
    <>
      {show && (
        <Wrapper>
          <AlertWrapper isAnimation={isAnimation} status={status} {...props}>
            <IconWrapper>{icon}</IconWrapper>
            {children}
          </AlertWrapper>
        </Wrapper>
      )}
    </>
  );
}

export default Alert;

const showAlert = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

const hideAlert = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0)
  }
  100% {
    opacity: 0;
    transform: translateY(-50px)
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const AlertWrapper = styled.div<AlertProps & { isAnimation: boolean }>`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;

  background-color: ${({ status, variants }) =>
    AlertBgColor({ status, variants })};
  color: ${({ status, variants }) => {
    if (!status) return COLORS.black;
    if (variants === 'fill') return COLORS.white;
    return AlertFillColor({ status });
  }};

  border: 2px solid
    ${({ status, variants }) => {
      if (variants === 'outline') return AlertFillColor({ status });
      return 'transparent';
    }};
  border-radius: 5px;

  opacity: ${({ isAnimation }) => (isAnimation ? 1 : 0)};
  animation: ${({ isAnimation }) => (isAnimation ? showAlert : hideAlert)} 0.7s
    ease-in-out;
  animation-fill-mode: forwards;
`;

const IconWrapper = styled.div`
  margin-left: 5px;
`;

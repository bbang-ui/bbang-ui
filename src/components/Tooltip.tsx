import styled from '@emotion/styled';

import { TooltipProps } from '@/types/tooltip';

const Tooltip = ({ message, label, children, ...props }: TooltipProps) => {
  return (
    <Wrapper>
      {children}
      <Content
        className={`${props.className} tooltip`}
        label={label}
        message={message}
      >
        {message}
      </Content>
    </Wrapper>
  );
};

export default Tooltip;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  &:hover > .tooltip {
    display: block;
  }
`;

const Content = styled.span<TooltipProps>`
  display: none;
  position: absolute;
  z-index: 2147483646;
`;

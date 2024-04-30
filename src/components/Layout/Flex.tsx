import { FlexProps } from '@/types/flex';
import { FlexAlignItemsMap, FlexJustifyContentMap } from '@/utils/flex';
import styled from '@emotion/styled';

export const Flex = ({ children, ...props }: FlexProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Flex;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'normal' }) =>
    FlexJustifyContentMap(justify)};
  align-items: ${({ align = 'normal' }) => FlexAlignItemsMap(align)};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  flex-grow: ${({ grow = 0 }) => grow};
  flex-shrink: ${({ shrink = 1 }) => shrink};
  flex-basis: ${({ basis = 'auto' }) => basis};
  gap: ${({ gap = 0 }) => gap}px;
`;

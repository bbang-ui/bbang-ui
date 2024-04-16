import { AvatarGroupProps } from '@/types/avatar';
import childrenWithProps from '@/utils/childrenWithProps';
import styled from '@emotion/styled';

function AvatarGroup({ size, children, ...props }: AvatarGroupProps) {
  return (
    <Wrapper {...props}>{childrenWithProps(children, { size: size })}</Wrapper>
  );
}

export default AvatarGroup;

const Wrapper = styled.div<AvatarGroupProps>`
  display: flex;
  gap: ${({ space = `10px` }) => space};
`;

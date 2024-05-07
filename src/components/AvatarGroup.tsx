import { SIZE_MAP } from '@/constants/avatarSizeMap';
import { COLORS } from '@/styles/color';
import { AvatarGroupProps } from '@/types/avatar';
import compact from '@/utils/compact';
import getChildren from '@/utils/getChildren';

import styled from '@emotion/styled';
import { cloneElement } from 'react';

function AvatarGroup({ size, max, children, ...props }: AvatarGroupProps) {
  const cloneChildren = getChildren(children);

  // max 값이 있다면 값을 slice, 아니면 그대로 반환
  const validateChildren =
    max !== null ? cloneChildren.slice(0, max) : cloneChildren;

  // reverse()를 해주는 이유 : 최신 값을 앞으로 갖고 오기 위해
  const reverseChildren = validateChildren.reverse();

  // 최종적으로 반환할 children
  const clones = reverseChildren.map((child, index) => {
    const childProps = {
      size: size,
      max: max,
      index: index,
    };
    return cloneElement(child, compact(childProps));
  });

  const countNumber = validateChildren.slice(0, max).length;

  return (
    <Wrapper {...props}>
      {max && cloneChildren.length - max > 0 && (
        <CountAvatar size={size} countNumber={countNumber}>
          +{cloneChildren.length - max}
        </CountAvatar>
      )}
      {clones}
    </Wrapper>
  );
}

export default AvatarGroup;

const Wrapper = styled.div<AvatarGroupProps>`
  display: flex;
  position: ${({ max }) => max ?? 'relative'};
  gap: ${({ space = 10 }) => space}px;
`;

const CountAvatar = styled.div<AvatarGroupProps & { countNumber: number }>`
  width: ${({ size = 'md' }) => SIZE_MAP[size] + 1}px;
  height: ${({ size = 'md' }) => SIZE_MAP[size] + 1}px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: ${({ countNumber }) => countNumber * 25}px;

  /* border: 1px solid ${COLORS.BLACK}; */
  border-radius: 9999px;

  // 추후 교체 필요
  color: ${COLORS.T_SHIRTS};
  background-color: ${COLORS.PRIMARY};

  z-index: ${({ countNumber }) => countNumber};
`;

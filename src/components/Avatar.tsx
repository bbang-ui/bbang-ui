import { SIZE_MAP } from '@/constants/avatarSizeMap';
import { AvatarProps } from '@/types/avatar';
import styled from '@emotion/styled';
import defaultImg from '../../public/images/default_avatar.webp';

function Avatar({ index, max, name, imgUrl, ...props }: AvatarProps) {
  return (
    <Wrapper index={index} max={max}>
      <Image
        src={imgUrl ?? defaultImg}
        alt={name ?? '기본 이미지'}
        {...props}
      />
    </Wrapper>
  );
}

export default Avatar;

const Wrapper = styled.div<AvatarProps>`
  ${({ max, index }) => {
    return (
      max !== undefined &&
      `position: absolute;
       left: ${index! * 25}px;
       z-index: ${index}`
    );
  }}
`;

const Image = styled.img<AvatarProps>`
  width: ${({ size = 'md' }) => SIZE_MAP[size]}px;
  height: ${({ size = 'md' }) => SIZE_MAP[size]}px;
  border-radius: 9999px;
  object-fit: cover;
`;

import { AvatarProps } from '@/types/avatar';
import styled from '@emotion/styled';
import defaultImg from '../../public/images/default_avatar.png';

const SizeMap = {
  xs: 25,
  sm: 30,
  md: 40,
  lg: 50,
};

function Avatar({ name, src, ...props }: AvatarProps) {
  return (
    <Wrapper {...props}>
      <Image src={src ?? defaultImg} alt={name} {...props} />
    </Wrapper>
  );
}

export default Avatar;

const Wrapper = styled.div<AvatarProps>``;

const Image = styled.img<AvatarProps>`
  width: ${({ size = 'md' }) => SizeMap[size]}px;
  height: ${({ size = 'md' }) => SizeMap[size]}px;
  border-radius: 9999px;
  object-fit: cover;
`;

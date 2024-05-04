import Spinner from '@/components/Spinner';
import { COLORS } from '@/styles/color';
import { SpinnerProps } from '@/types/spinner';

const meta = {
  title: 'Spinner',
  args: {
    size: 'sm',
    thickness: '2',
    color: COLORS.BLACK,
    emptyColor: 'transparent',
    speed: '1',
  },
  component: Spinner,
};

export default meta;

function Component({ children, ...props }: SpinnerProps) {
  return <Spinner {...props}>{children}</Spinner>;
}

export const Spinner_ = {
  render: Component,
};

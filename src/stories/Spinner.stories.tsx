import Spinner from '@/components/Spinner';
import { COLORS } from '@/styles/color';
import SwitchProps from '@/types/switch';

const meta = {
  title: 'Spinner',
  args: {
    size: 'sm',
    thickness: '2',
    color: COLORS.black,
    bgColor: 'transparent',
    speed: '1',
  },
  component: Spinner,
};

export default meta;

function Component({ children, ...props }: SwitchProps) {
  return <Spinner {...props}>{children}</Spinner>;
}

export const Spinner_ = {
  render: Component,
};

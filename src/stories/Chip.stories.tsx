import Chip from '@/components/Chip';
import { ChipProps } from '@/types/chip';

const meta = {
  title: 'Chip',
  args: {
    size: 'md',
    colorTheme: 'primary',
    isDisabled: false,
  },
  component: Chip,
};

export default meta;

function Component({ children, ...props }: ChipProps) {
  return <Chip {...props}>{children ?? 'Chip'}</Chip>;
}

export const Chip_ = {
  render: Component,
};

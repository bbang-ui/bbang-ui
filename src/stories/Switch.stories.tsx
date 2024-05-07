import Switch from '@/components/Switch';
import { SwitchProps } from '@/types/switch';

const meta = {
  title: 'Switch',
  args: {
    size: 'md',
    theme: 'primary',
    isDisabled: 'false',
  },
  component: Switch,
};

export default meta;

function Component({ ...props }: SwitchProps) {
  return <Switch {...props} />;
}

export const Switch_ = {
  render: Component,
};

import Button from '@/components/Button';
import { ButtonProps } from '@/types/button';

const meta = {
  title: 'Button',
  args: {
    type: 'button',
    size: 'md',
    colorTheme: 'primary',
    variants: 'none',
    isDisabled: false,
  },
  component: Button,
};

export default meta;

function Component({ ...props }: ButtonProps) {
  return <Button {...props}>Button</Button>;
}

export const Button_ = {
  render: Component,
};

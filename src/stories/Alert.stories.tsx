import Alert from '@/components/Alert';
import { AlertProps } from '@/types/alert';

const meta = {
  title: 'Alert',
  args: {
    status: 'success',
    variants: 'fill',
  },
  component: Alert,
};

export default meta;

function Component({ ...props }: AlertProps) {
  return <Alert {...props}>해당 컴포넌트는 Alert 입니다.</Alert>;
}

export const Alert_ = {
  render: Component,
};

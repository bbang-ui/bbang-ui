import { COLORS } from '@/styles/color';
import { AlertProps } from '@/types/alert';

function AlertColor({ status }: AlertProps) {
  switch (status) {
    case 'success':
      return COLORS.SUCCESS;
    case 'error':
      return COLORS.ERROR;
    case 'warning':
      return COLORS.WARNING;
    case 'info':
      return COLORS.INFO;
    default:
      return COLORS.PRIMARY;
  }
}

export default AlertColor;

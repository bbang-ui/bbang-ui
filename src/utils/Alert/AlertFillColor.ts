import { COLORS } from '@/styles/color';
import { AlertProps } from '@/types/alert';

function AlertFillColor({ status }: AlertProps) {
  switch (status) {
    case 'success':
      return COLORS.FILL_SUCCESS;
    case 'error':
      return COLORS.FILL_ERROR;
    case 'warning':
      return COLORS.FILL_WARNING;
    case 'info':
      return COLORS.FILL_INFO;
    default:
      return COLORS.primary;
  }
}

export default AlertFillColor;

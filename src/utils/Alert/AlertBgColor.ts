import { AlertProps } from '@/types/alert';
import AlertColor from '@/utils/Alert/AlertColor';
import AlertFillColor from '@/utils/Alert/AlertFillColor';

function AlertBgColor({ status, variants }: AlertProps) {
  if (variants === 'fill') {
    return AlertFillColor({ status });
  }
  if (variants === 'outline') {
    return 'none';
  }
  return AlertColor({ status });
}

export default AlertBgColor;

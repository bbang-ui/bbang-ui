import { DirectionType } from '@/types/tooltip';

function TooltipPlacement(placement: DirectionType) {
  switch (placement) {
    case 'top':
    case 'bottom':
      return 'justify-content: center';
    case 'left':
    case 'right':
      return 'align-items: center';
    default:
      return 'justify-content: center';
  }
}

export default TooltipPlacement;
